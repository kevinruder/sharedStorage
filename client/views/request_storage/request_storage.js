/**
 * Created by Kevin on 05/02/2016.
 */

Template.storageRequest.helpers({

        defaultValues:function(){


            console.log(Meteor.user());


            return {
                Provider : Template.storageRequest.requestData.name,
                Address: "Not yet disclosed",
                Client: Meteor.user().profile.name,
                Space: Template.storageRequest.requestData.space,
                Price: Template.storageRequest.requestData.price

            }

        }

});


Template.storageRequest.onCreated(function () {

    // Use this.subscribe inside onCreated callback


    console.log(Router.current().params.query);


    Template.storageRequest.requestData = Router.current().params.query;


});
