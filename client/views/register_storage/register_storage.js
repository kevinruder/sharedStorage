/**
 * Created by Kevin on 10/01/2016.
 */

// RESTRICTS SUBSCRIPTION TO THIS TEMPLATE

Template.RegisterStorage.onCreated(function () {
    // Use this.subscribe inside onCreated callback
    this.subscribe("storage");
});
