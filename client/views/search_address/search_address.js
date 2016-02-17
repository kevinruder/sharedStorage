SimpleSchema.debug =true;   //TESTING

AddressSchema =new SimpleSchema({
    formattedAddress: {
        type: String,
        optional: true
    },
    geopoint: {
        type: [Number], //[longitude, latitude]
        decimal: true,
        optional: true
    },
    city: {
        type: String,
        optional: true
    },
    postalCode: {
        type: String,
        optional: true
    },
    country: {
        type: String,
        optional: true
    },
    countryName: {
        type: String,
        optional: true
    }
});

PropertySchema =new SimpleSchema({
    addresses: {
        type: AddressSchema,
        optional: true,
        autoform: {
            type: 'google-places-input'
            // geopointName: "myOwnGeopointName" //optional, you can use a custom geopoint name
        }
    }
});



Meteor.methods({
    savePropertyAddress: function(doc, docId) {
        console.log("Nothing");

    }
});



if(Meteor.isClient) {
    function init(params) {
        // if(params.insert) {
        //   var doc ={
        //     address: {
        //       fullAddress
        //     }
        //   }
        //   PropertiesCollection.insert(doc, function(error, result) {
        //     if(Meteor.isClient) {
        //       if(!error && result) {
        //         console.log('property inserted');
        //         this.propertyId =result;
        //       }
        //     }
        //   });
        // }
    }


    Template.autoformGoogleplaceBasic.events({

        'click .filter-stuff': function(evt, template) {

            evt.preventDefault();

            var lat = AutoForm.getFieldValue('addresses', 'propertyAddressForm').geopoint[1];
            var long = AutoForm.getFieldValue('addresses', 'propertyAddressForm').geopoint[0];

            console.log(lat);
            console.log(long);

            var coord = {lat: lat,
                        long:long};

            console.log(lat,long);

            Session.set('changeLocation',coord);
        },
        //testing (logging on any keyup) AutoForm.getFieldValue
        'keyup': function(evt, template) {

            // if keyup do something
        }
    });
}