/**
 * Created by Kevin on 08/02/2016.
 */
Transactions = new Mongo.Collection('transaction');



Transactions.allow({
    insert: function (userId) {
        // the user must be logged in, and the document must be owned by the user
        return (userId);
    }

});

Transactions.attachSchema(new SimpleSchema({

    Provider: {
        type: String,
        label: "Space owner's name",
        max: 200
    },

    Address: {
        type: String,
        label: "Address",
    },
    Client: {
        type: String,
        label: "Your name",
        optional: true,
        autoform: {
            defaultValue: Meteor.user.name
        }

    },

    Space: {
        type: Number,
        label: "Space in cubic meters",
        min: 0
    },
    Start: {
        type: Date,
        label: "Start date",
        optional: true
    },
    Price:{
        type: Number,
        label: "Price pr square meter, pr month"
    },

    End: {
        type: Date,
        label: "End Date",
        optional: true
    },
    summary: {
        type: String,
        label: "Brief summary",
        optional: true,
        max: 1000
    }
}));


if(Meteor.isServer) {

    Meteor.publish("transaction", function() {
        return Transactions.find({});
    });

}