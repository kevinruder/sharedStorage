/**
 * Created by Kevin on 16/01/2016.
 */
Template.spaceSearch.helpers({
    spaceSearchSchema: function() {


        return Schema.spaceSearch;
    },

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



Template.spaceSearch.events({
    'form change': function(event, template){
        console.log("SOMETHING CHANGED");
        //template.$("input[name=myAge]").val(birthdate);
    }
});




