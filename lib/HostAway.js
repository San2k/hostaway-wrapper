import resources from './resources.js';

export default class HostAway {
    constructor(auth) {
      auth = auth || {};
      this.host = (!auth.token) ? 'https://api.hostaway.com/v1/accessTokens' : 'https://api.hostaway.com/v1';
      this.port = (!auth.port) ? '' : auth.port;
      this.token = (!auth.token) ? '' : auth.token;
      this.grant_type = 'client_credentials';
      this.client_id = auth.client_id;
      this.client_secret = auth.client_secret;
      this.scope = 'general';
      const rejectUnauthorized = auth.ignoreCert ? false : true;
      this.apiConfig = {
        base: `${this.host}`,
        grant_type: this.grant_type,
        client_id: this.client_id,
        client_secret: this.client_secret,
        scope: this.scope,
        token: this.token,
        rejectUnauthorized
      };

      if (auth.hasOwnProperty('token')) {
        apiConfig.token = auth.token;
      }
        if(this.apiConfig.token !=''){
        this.apiConfig.base = 'https://api.hostaway.com/v1';
         }
        this.prepResources(resources);

    }

    getToken(){
        return this.apiConfig.token;
    }

    setToken(token){
     this.apiConfig.token = token;
    }

    setBase(base){
        this.apiConfig.base = base;
       }

    get_Config(){
        return this.apiConfig;
    }
    
    //Prep modules 
    prepResources(resources) {
        for (const name in resources) {
            this[name.toLowerCase()] = new resources[name](this.apiConfig);
        }
    }
    auth(){
        var that = this;
        var $checkSessionServer=this.request._auth(this.apiConfig);
        $checkSessionServer.then(function(res){
            that.setToken(res);
            that.setBase('https://api.hostaway.com/v1');
    }).catch(console.log)
        return $checkSessionServer;
    }
  }
  