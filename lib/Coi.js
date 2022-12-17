import {default as Request} from './Request.js';

// https://api.hostaway.com/documentation?shell#common-information-endpoints

export default class Coi extends Request{    
  constructor(apiConfig) {
    super(apiConfig);
  }

   // GET https://api.hostaway.com/v1/countries
   get_countries() {
    return this._get(`/countries`);
   }

   // GET https://api.hostaway.com/v1/currencies
   get_currencies() {
      return this._get(`/currencies`);
     }

   // GET https://api.hostaway.com/v1/languages
   get_languages() {
      return this._get(`/languages`);
     }

      // GET https://api.hostaway.com/v1/timezones
   get_timezones() {
      return this._get(`/timezones`);
     }


}