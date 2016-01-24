/**
 * Created by Kevin on 11/01/2016.
 */

RegisterStorage = new Mongo.Collection('storage');


RegisterStorage.allow({
    insert: function (userId) {
        // the user must be logged in, and the document must be owned by the user
        return (userId);
    }

});


RegisterStorage.attachSchema(new SimpleSchema({

    Name: {
        type: String,
        label: "Name",
        max: 200
    },
    Address: {
        type: String,
        label: "Address",
        optional: true

    },

    Lat:{

        type: String,
        label:'latitude',
        optional: true,
        autoValue:function(){
            return Meteor.call('GetLat',this.siblingField("Address").value);
        },
        autoform: {
            type: "hidden",
            label: false
        }




    },

    Long:{

        type: String,
        label: 'longitude',
        optional: true,
        autoValue:function(){

            return Meteor.call('GetLong',this.siblingField("Address").value);
        },
        autoform: {
            type: "hidden",
            label: false
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





Meteor.publish("storage", function() {
    return RegisterStorage.find({});
});


