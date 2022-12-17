import axios from 'axios';
import FormData from 'form-data';

export default class Request {
  constructor(apiConfig) {
    this.apiConfig = apiConfig || {};
  }

  _get(path) {
    return _request.call(this, 'GET', path);
  }

  _post(path, body) {
    return _request.call(this, 'POST', path, body);
  }

  _put(path, body) {
    return _request.call(this, 'PUT', path, body);
  }

  _delete(path, body) {
    return _request.call(this, 'DELETE', path, body);
  }

  _auth(path, qs, body){
    return _authrequest.call(this, 'POST', path='', qs, body);
  }


}

async function _request(method, path, body) {

  if(!this.apiConfig.token){ this._auth(this.apiConfig); }

    var config = {
        method: method,
        url: `${this.apiConfig.base}${path}`,
        headers: { 
           'Content-Type': 'application/json',
           'authorization': this.apiConfig.token,
           'cache-control': 'no-cache'
        },
       data : body
      };

      let res = axios(config)
          .then(function (response) {
             res = response.data.result;
             return(res);
          })
          .catch(function (error) {
              console.log(error);
              return false;
          });

return res;

};



async function _authrequest(method, path, qs, body) {
   var data = new FormData();
   data.append('grant_type',this.apiConfig.grant_type);
   data.append('client_id',this.apiConfig.client_id);
   data.append('client_secret',this.apiConfig.client_secret);
   data.append('scope',this.apiConfig.scope);

    var config = {
        method: method,
        url: `${this.apiConfig.base}${path}`,
        headers: { 
            ...data.getHeaders()
        },
        data : data
      };

     let res = axios(config)
          .then(function (response) {
           res = response.data.token_type+" "+response.data.access_token;
           return(res);
          })
          .catch(function (error) {
              console.log(error);
          });
return res;
}