SimpleSchema.debug =true;   //TESTING


AddressSchema =new SimpleSchema({
    fullAddress: {
        type: String
    },
    lat: {
        type: Number,
        decimal: true
    },
    lng: {
        type: Number,
        decimal: true
    },
    geometry: {
        type: Object,
        blackbox: true
    },
    placeId: {
        type: String
    },
    street: {
        type: String,
        max: 100
    },
    city: {
        type: String,
        max: 50
    },
    state: {
        type: String,
        regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/
    },
    zip: {
        type: String,
        regEx: /^[0-9]{5}$/
    },
    country: {
        type: String
    }
});

PropertySchema =new SimpleSchema({
    addresses: {
        type: [AddressSchema],
        optional: true
    },
    textOne: {
        type: 'String',
        optional: true
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

    Template.autoformGoogleplaceBasic.helpers({

        optsGoogleplace2: function() {
            return {
                // type: 'googleUI',
                // stopTimeoutOnKeyup: false,
                googleOptions: {
                    types: ['(cities)'],
                    componentRestrictions: { country:'dk' }
                }
            }
        }
    });

    Template.autoformGoogleplaceBasic.events({

        'click .filter-stuff': function(evt, template) {

            var lat = AutoForm.getFieldValue('addresses.0', 'propertyAddressForm').lat;
            var long = AutoForm.getFieldValue('addresses.0', 'propertyAddressForm').lng;

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