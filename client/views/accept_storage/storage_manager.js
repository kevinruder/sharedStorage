Template.storageManager.onCreated(function(){

    Meteor.subscribe("transaction");

    var transactions = Transactions.find({}).fetch();

    Session.set("Transactions",transactions) ;

});

Template.storageManager.helpers({

    transactions: function () {
            return Transactions.find({Provider: Meteor.user().profile.name});
        }
})

Template.acceptStorage.onCreated(function(){



});

Template.acceptStorage.helpers({

    cool:function(){
        console.log(Session.get("Transactions"));
        return "SOMETHING WILL BE HERE SOON"
    }


})