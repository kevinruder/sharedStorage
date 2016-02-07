/**
 * Created by Kevin on 10/01/2016.
 */

// RESTRICTS SUBSCRIPTION TO THIS TEMPLATE

Template.RegisterStorage.onCreated(function () {
    // Use this.subscribe inside onCreated callback
    this.subscribe("storage");
});

Template.RegisterStorage.helpers({

    recommendedPrice:function(){

        // later insert functionality that sets price according to zipcode/postnr
        return "30 kr"
    }
});


