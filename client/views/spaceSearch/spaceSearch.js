/**
 * Created by Kevin on 16/01/2016.
 */
Template.spaceSearch.helpers({
    spaceSearchSchema: function() {
        return Schema.spaceSearch;
    },

    // THIS FUNCTION OR TEMPLATE IS CURRENTLY NOT BEING USED

    jew: function() {

        // value is an array
        var value = AutoForm.getFieldValue('Items');

        var foo =  {
            "chair" : 30,
            "sofa" : 20
        }

        // total cubic meters

        var totalCM = 0;

        // Compare json object with value

        var k;

        for(k in value){

            getPropertyByRegex(foo,value[k]);
        }


        console.log(totalCM);

        // SHOULD I QUERY THE CLIENT(JSON OBJECT) OR THE SERVER

        //Session variable for use in maps

        Session.set("spaceNeeded",totalCM);

        return totalCM;

        function getPropertyByRegex(obj,propName) {
            var re = new RegExp("^" + propName + "(\\[\\d*\\])?$"),
                key;
            for (key in obj)
                if (re.test(key))
                    totalCM += obj[key];
            return null; // put your default "not found" return value here
        }

    }
});


Template.searchItem.helpers({

    calculateSpace:function(){

        var value = AutoForm.getFieldValue('inventory');
        var totalCM = 0;

        var k;

        for(k in value){

            var cool = ItemList.find({name: value[k].name}).fetch();
            totalCM += (cool[0].volume * value[k].amount);

        }

        Session.set("spaceNeeded",totalCM);

        return totalCM;

        // set this as a session variable :)




    }

});


Template.spaceSearch.events({
    'form change': function(event, template){
        console.log("SOMETHING CHANGED");
        //template.$("input[name=myAge]").val(birthdate);
    }
});

Template.searchItem.onCreated(function() {

    this.subscribe("itemlist");

});






