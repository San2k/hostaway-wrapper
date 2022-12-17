# hostaway-wrapper

> Hostaway.com simple api wrapper library for Node.js

## Install

```sh
npm install hostaway-wrapper
```

## Usage

In your project, initialise a new instance of the **hostaway-wrapper** and provide Your Hostaway account ID and Client’s secret (can be obtained in your [Hostaway dashboard](https://dashboard.hostaway.com/settings/hostaway-api).

```js
import HostAway from 'hostaway-wrapper';

const hass = new HostAway({
  client_id: <Your-Hostaway-account-ID>,
  client_secret: <Clients-Secret>
});
```

Before calling any functions it is necessary to call  ```auth``` function:

```js
hass.auth().then(function(){
	// call everything you need inside here

      hass.listings.get_listings().then(function(data) {
         console.log(data);
      })

}
```

# Interface

Implemented API methods 

## Listings
https://api.hostaway.com/documentation?shell#listings
```js
// Example

      hass.listings.get_listings().then(function(data) {
         console.log(data);
      })

```

- **get_listings()** - https://api.hostaway.com/documentation?shell#retrieve-a-listings-list
- **get_listing(listingId)** - https://api.hostaway.com/documentation?shell#retrieve-a-listing
- **create_listing(data)** - https://api.hostaway.com/documentation?shell#create-a-listing
- **update_listing(listingId, data)** - https://api.hostaway.com/documentation?shell#update-a-listing
- **delete_listing(listingId)** - https://api.hostaway.com/documentation?shell#delete-a-listing
- **calculate_reservation_price(listingId, data)** - https://api.hostaway.com/documentation?shell#reservation-price-calculation

## Reservations

https://api.hostaway.com/documentation?shell#reservations

```js
// Example

      hass.reservations.get_reservation(52662251).then(function(data) {
         console.log(data);
      })

```
- **get_reservations(limit,offset,sortOrder,channelId,listingId, assigneeUserId,match,arrivalStartDate,arrivalEndDate,hasUnreadConversationMessages,isStarred,isArchived,isPinned,customerUserId,includeResources,latestActivityStart,latestActivityEnd,reservationAgreement)** -  https://api.hostaway.com/documentation?shell#retrieve-a-reservations-list
- **get_reservation(reservationId)** - https://api.hostaway.com/documentation?shell#retrieve-a-reservation
- **get_reservation_by_status(reservations, status=[])** - returns reservations with a specific statuses
```
reservations - get_reservations() output.
status - is an array of statuses to GET as logical 'OR' (||).
Example:
status=[new,modified,cancelled] // new||modified||cancelled
Will return resewrvations with status new OR modified OR cancelled
```
- **create_reservation(data,forceOverbooking)**  - https://api.hostaway.com/documentation?shell#create-a-reservation

- **cancel_reservation(reservationId, who)** - https://api.hostaway.com/documentation?shell#cancel-a-reservation

- **update_reservation(reservationId,forceOverbooking, data)** - https://api.hostaway.com/documentation?shell#update-a-reservation

- **delete_reservation(reservationId)** - https://api.hostaway.com/documentation?shell#delete-a-reservation

## Calendar

https://api.hostaway.com/documentation?shell#calendar
```js
// Example

      hass.calendar.get_calendar(52662251,'2018-09-01','2018-09-30',1).then(function(data) {
         console.log(data);
      })

```

- **get_calendar(listingId, startDate, endDate, includeResources)** - https://api.hostaway.com/documentation?shell#retrieve-a-calendar

- **update_calendar(listingId, data)** - https://api.hostaway.com/documentation?shell#update-the-calendar

- **batch_update_calendar(listingId, data)** - https://api.hostaway.com/documentation?shell#batch-calendar-update

## Coversations

https://api.hostaway.com/documentation?shell#conversations
```js
// Example

      hass.conversations.get_conversations().then(function(data) {
         console.log(data);
      })
```

- **get_conversations(limit, offset, reservationId, includeResources)** - https://api.hostaway.com/documentation?shell#retrieve-a-conversations-list
- **get_conversations_by_reservationId(reservationId)** - https://api.hostaway.com/documentation?shell#retrieve-a-conversations-list-for-the-reservation
- **get_conversation_object(conversationId,includeResources)** - https://api.hostaway.com/documentation?shell#retrieve-a-conversation-object
- **get_conversation_messages_list(conversationId, limit, offset,includeScheduledMessages)** - https://api.hostaway.com/documentation?shell#retrieve-conversation-messages-list
- **get_conversation_message(conversationId, conversationMessageId)** - https://api.hostaway.com/documentation?shell#retrieve-conversation-message 
- **send_conversation_message(conversationId, data)** - https://api.hostaway.com/documentation?shell#send-conversation-message

## COI (Common information endpoints)

https://api.hostaway.com/documentation?shell#common-information-endpoints
```js
// Example

      hass.coi.get_countries().then(function(data) {
         console.log(data);
      })
```

- **get_countries()** - https://api.hostaway.com/documentation?shell#country-codes-and-countries-list
- **get_currencies()** - https://api.hostaway.com/documentation?shell#currency-codes-and-currencies-list
- **get_languages()** - https://api.hostaway.com/documentation?shell#language-codes-and-languages-list
- **get_timezones()** - https://api.hostaway.com/documentation?shell#timezones-list


# License
The MIT License (MIT)

Copyright (c) 2021 Matt Major

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


