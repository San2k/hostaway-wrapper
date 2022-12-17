import {default as Request} from './Request.js';

// https://api.hostaway.com/documentation?shell#conversations

export default class Conversations extends Request{    
  constructor(apiConfig) {
    super(apiConfig);
  }

// GET https://api.hostaway.com/v1/conversations
// Parameter | Required | Type | Description
// limit | no | int | Maximum number of items in the list.
// offset | no | int | Number of items to skip from beginning of the list.
// reservationId | no | int | reservation id
// includeResources | no | int | if includeResources flag is 1 then response objects are supplied with supplementary resources, default is 1.
  get_conversations(limit='', offset='', reservationId='', includeResources=1) {
    return this._get(`/conversations?limit=${limit}&offset=${offset}&reservationId=${reservationId}&includeResources=${includeResources}`);
  }

// GET https://api.hostaway.com/v1/reservations/{reservationId}/conversations
  get_conversations_by_reservationId(reservationId) {
   return this._get(`/reservations/${reservationId}/conversations`);
  }

  // GET https://api.hostaway.com/v1/conversations/{conversationId}
//   Parameter | Required | Type | Description
// includeResources | no | int | if includeResources flag is 1 then response object is supplied with supplementary resources, default is 1.
  get_conversation_object(conversationId,includeResources=1) {
   return this._get(`/conversations/${conversationId}?includeResources=${includeResources}`);
  }

 // GET https://api.hostaway.com/v1/conversations/{conversationId}/messages
//   Parameter | Required | Type | Description
// limit | no | int | Maximum number of items in the list.
// offset | no | int | Number of items to skip from beginning of the list.
// includeScheduledMessages | no | int | Return messages of all the statuses or not
get_conversation_messages_list(conversationId, limit='', offset='',includeScheduledMessages=1) {
   return this._get(`/conversations/${conversationId}/messages?limit=${limit}&offset=${offset}&includeScheduledMessages=${includeScheduledMessages}`);
  }

  // GET https://api.hostaway.com/v1/conversations/{conversationId}/messages/{conversationMessageId}
  get_conversation_message(conversationId, conversationMessageId) {
   return this._get(`/conversations/${conversationId}/messages/${conversationMessageId}`);
  }

   //POST https://api.hostaway.com/v1/conversations/{conversationId}/messages
   send_conversation_message(conversationId, data) {
      return this._post(`/conversations/${conversationId}/messages`, data);
     }

}