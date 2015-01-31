console.log('This would be the main JS file.');
{

    "NotificationSubscription": {

        "name": "presence-event-trigger",

        "notificationType": "EVENT_DRIVEN",

        "dataFormat": "JSON",

        "NotificationReceiverInfo": {

            "transport": {

                "type" : "TransportHttp",

                "hostAddress": "1.2.3.4",

                "port": "5555"

            }

        },

    "subscribedEvents" : [

    {

        "type" : "PresenceEventTrigger",

        "existingPresence" : "true",

        "eventEntity": "WIRELESS_CLIENTS"

    }

    ]

    }

}