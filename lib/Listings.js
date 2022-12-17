import {default as Request} from './Request.js';

//https://api.hostaway.com/documentation?shell#listings

export default class Listings extends Request{    
  constructor(apiConfig) {
    super(apiConfig);
  }
  // GET /listings
  // GET https://api.hostaway.com/v1/listings
   get_listings() {
    return this._get(`/listings`);
   }

   // GET https://api.hostaway.com/v1/listings/{listingId}
   get_listing(listingId) {
    return this._get(`/listings/${listingId}`);
   }

  // POST https://api.hostaway.com/v1/listings
   // DATA: https://api.hostaway.com/documentation?shell#listing-object
    create_listing(data) {
    return this._post(`/listings`, data);
   }

   // PUT https://api.hostaway.com/v1/listings/{listingId}
   // DATA: https://api.hostaway.com/documentation?shell#listing-object
   update_listing(listingId, data) {
    return this._put(`/listings/${listingId}`, data);
   }

   // DELETE https://api.hostaway.com/v1/listings/{listingId}
   delete_listing(listingId) {
    return this._delete(`/listings/${listingId}`);
   }

  // POST https://api.hostaway.com/v1/listings/{listingId}/calendar/priceDetails
// Json Parameter | Required | Type | Description
// startingDate | yes | date | Arrival date
// endingDate | yes | date | Departure date
// numberOfGuests | yes | int | Number of guest
// markup | no | float | Markup must be more then 1.0
// reservationCouponId | no | int | Reservation Coupon ID
// version | yes | int | Please use version 2 (version = 2)
   calculate_reservation_price(listingId, data) {
    return this._post(`/listings/${listingId}/calendar/priceDetails`, data);
   }

}