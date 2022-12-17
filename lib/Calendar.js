import {default as Request} from './Request.js';

// https://api.hostaway.com/documentation?shell#calendar-day-object

export default class Calendar extends Request{    
  constructor(apiConfig) {
    super(apiConfig);
  }

// GET https://api.hostaway.com/v1/listings/{listingId}/calendar
// Parameter | Required | Type | Description
// startDate | no | date	
// endDate | no | date	
// includeResources | no | int | if includeResources flag is 1 then response objects are supplied with supplementary resources, default is 1.
   get_calendar(listingId, startDate='', endDate='', includeResources=1) {
    return this._get(`/listings/${listingId}/calendar?startDate=${startDate}&endDate=${endDate}&includeResources=${includeResources}`);
   }

   // PUT https://api.hostaway.com/v1/listings/{listingId}/calendar
   // To block/unblock calendar (for multi-unit and single-unit listings):
// Single units set “isAvailable” to 0
// Multi-units set “desiredUnitsToSell” to 0
   update_calendar(listingId, data) {
    return this._put(`/listings/${listingId}/calendar`, data);
   }

      // PUT https://api.hostaway.com/v1/listings/{listingId}/calendarIntervals
   // https://api.hostaway.com/documentation?shell#update-the-calendar-of-multi-unit-listing
   batch_update_calendar(listingId, data) {
   return this._put(`/listings/${listingId}/calendarIntervals`, data);
   }

}