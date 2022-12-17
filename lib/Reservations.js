import {default as Request} from './Request.js';

// https://api.hostaway.com/documentation?shell#reservations

export default class Reservations extends Request{    
  constructor(apiConfig) {
    super(apiConfig);
  }
// GET https://api.hostaway.com/v1/reservations
// https://api.hostaway.com/documentation?shell#reservation-statuses
// **Query**
// **Parameter | Required | Type | Description**
// limit | no | int | Maximum number of items in the list.
// offset | no | int | Number of items to skip from beginning of the list.
// sortOrder | no | string | One of: arrivalDate, arrivalDateDesc, lastConversationMessageSent, lastConversationMessageSentDesc, lastConversationMessageReceived, lastConversationMessageReceivedDesc, latestActivity, latestActivityDesc.
// channelId | no | int	
// listingId | no | int	
// assigneeUserId | no | int	
// match | no | string | Used to search a reservation by guest name.
// arrivalStartDate | no | date	
// arrivalEndDate | no | date	
// departureStartDate | no | date	
// departureEndDate | no | date	
// hasUnreadConversationMessages | no | bool	
// isStarred | no | bool	
// isArchived | no | bool	
// isPinned | no | bool	
// customerUserId | no | string	
// includeResources | no | int | if includeResources flag is 1 then response object is supplied with supplementary resources, default is 1.
// latestActivityStart | no | date	
// latestActivityEnd | no | date	
// reservationAgreement | no | string	

   get_reservations(limit='',offset='',sortOrder='arrivalDate',channelId='',listingId='', assigneeUserId='',match='',arrivalStartDate='',arrivalEndDate='',hasUnreadConversationMessages='',isStarred='',isArchived='',isPinned='',customerUserId='',includeResources=1,latestActivityStart='',latestActivityEnd='',reservationAgreement='') {
    return this._get(`/reservations?limit=${limit}&offset=${offset}&sortOrder=${sortOrder}&channelId=${channelId}&listingId=${listingId}&assigneeUserId=${assigneeUserId}&match=${match}&arrivalStartDate=${arrivalStartDate}&arrivalEndDate=${arrivalEndDate}&hasUnreadConversationMessages=${hasUnreadConversationMessages}&isStarred=${isStarred}&isArchived=${isArchived}&isPinned=${isPinned}&customerUserId=${customerUserId}&includeResources=${includeResources}&latestActivityStart=${latestActivityStart}&latestActivityEnd=${latestActivityEnd}&reservationAgreement=${reservationAgreement}`);
   }

   // GET https://api.hostaway.com/v1/reservations/{reservationId}
   get_reservation(reservationId) {
    return this._get(`/reservations/${reservationId}`);
   }

// Status | Description
// new | New reservation, blocks calendar
// modified | Reservation that has dates, guests, listing or pricing modified. Blocks calendar
// cancelled | Reservation cancelled by either host or guest. Does not block calendar
// ownerStay | Hostaway specific status for reservations created by Owners that wish to block their properties usually because they plan to stay in them
// pending | Airbnb only: for those clients using Airbnb’s Request to Book functionality. Client needs to approve or decline the reservation. If approved, the status will change to new. If declined, the status wil be expired
// awaitingPayment | Airbnb only: Intermediary reservation states that require guest action (no host action). If the guest fails to complete their tasks, this would result in status cancelled, otherwise status will be new. This status blocks the calendar
// declined | Airbnb only as a result of declining a Request to Book reservation (pending)
// expired | As explained in row 5
// unconfirmed | Vrbo only: similar to pending status for those clients that use Vrbo Request to Book functionality. Client needs to approve or decline the reservation. If approved the status will change to new, if declined it will change to cancelled
// awaitingGuestVerification | Airbnb only: Intermediary reservation states that require guest action (no host action). If the guest fails to complete their tasks, this would result in status cancelled, otherwise status will be new. This status blocks the calendar
// inquiry | Reservation status representing a guest question which doesn’t block the calendar
// inquiryPreapproved | Airbnb only: Hosts can preapprove the guest to encourage reservation. The host will have 24 hours to confirm their reservation. If they don’t the reservation will show status inquiryTimeout. The host can also decline the inquriy and the reservation will have status inquiryNotPossible.
// inquiryDenied | Airbnb only: If a host does not preapprove a guest they will receive a simple inquiry. Hosts will still have 24 to approve or deny de inquiry. If approved it will become a new reservation. If declined it will show status inquiryDenied
// inquiryTimedout | as explained in row 13
// inquiryNotPossible | as explained in row 13
// unknown | Airbnb only: something made the inquiry fail.
//
// reservations - get_reservations() output.
// status - is an array of statuses to GET as logical 'OR' (||).
// Example:
// status=[new,modified,cancelled] // new||modified||cancelled

   get_reservation_by_status(reservations, status=[]) {
   var arr=[];
    reservations.forEach(function(res) {
      for (var j = 0; j < status.length; j++) {
      if(res.status==status[j]){
        arr.push(res);
      }
     }
     });
   // console.log(arr);
    return arr;
   }

   //POST https://api.hostaway.com/v1/reservations?forceOverbooking=1
   // Query parameter | Required | Type | Description
   // forceOverbooking | no | int | Ignore overbooking protection
  create_reservation(data,forceOverbooking=0) {
    return this._post(`/reservations?forceOverbooking=${forceOverbooking}`, data);
   }

    // PUT https://api.hostaway.com/v1/reservations/{reservationId}?forceOverbooking=1
   // DATA: https://api.hostaway.com/documentation?shell#reservation-object
   update_reservation(reservationId,forceOverbooking=0, data) {
    return this._put(`/reservations/${reservationId}?forceOverbooking=${forceOverbooking}`, data);
   }

   // PUT https://api.hostaway.com/v1/reservations/{reservationId}/statuses/cancelled
   // who should be specified with value 'host' or 'guest'.
    cancel_reservation(reservationId, who='host') {
      var obj = new Object();
      obj.name = "cancelledBy";
      obj.val  = who;
      var jsonString= JSON.stringify(obj);
    return this._put(`/reservations/${reservationId}/statuses/cancelled`, jsonString);
   }

   // DELETE https://api.hostaway.com/v1/reservations/{reservationId}
   delete_reservation(reservationId) {
    return this._delete(`/reservations/${reservationId}`);
   }

}