/**
 * Created by Kevin on 10/01/2016.
 */
Meteor.startup(function() {
    GoogleMaps.load();
});

Template.Map.helpers({

    exampleMapOptions: function() {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {


            // Map initialization options
            return {
                center: new google.maps.LatLng(55.6761, 12.5683),
                zoom: 8
            };

        }
    },

    markers: function(){

    }



});

Template.Map.onCreated(function() {

    var gmarkers = [];

    var Users =  RegisterStorage.find({}).fetch();

    this.subscribe("storage");

    GoogleMaps.ready('exampleMap', function(map) {
        // Add a marker to the map once it's ready

        var k;

        for(k in Users){

            var lat = Users[k].Lat;
            var long = Users[k].Long;

            placeMarker(lat,long);

            gmarkers.push(marker);

        }

    });

    this.autorun(function(){

        var _spaceNeeded = Session.get("spaceNeeded");

        if(_spaceNeeded == null){
            _spaceNeeded = 0;
        }

        var Users =  RegisterStorage.find({Space:{$gt:_spaceNeeded}}).fetch();

        if(GoogleMaps.loaded()){

            removeMarkers();


            var k;

            for(k in Users){

                var lat = Users[k].Lat;
                var long = Users[k].Long;

                placeMarker(lat,long);

                console.log("NEW MARKER PLACED SON");


            }

            //addMarkers();

        }




    })

    function placeMarker(lat,long){


        var marker = new google.maps.Marker({
            position: {
                lat:parseFloat(long),
                lng:parseFloat(lat)
            },
            map: GoogleMaps.maps.exampleMap.instance

        });

        gmarkers.push(marker);

    }

    function removeMarkers(){
        for(i=0; i < gmarkers.length; i++){
            gmarkers[i].setMap(null);
        }

        console.log("Markers have been removed");
    }

    console.log(gmarkers);

    function addMarkers(){
        for(i=0; i < gmarkers.length; i++){
            gmarkers[i].setMap(GoogleMaps.maps.exampleMap.instance);
        }
    }



    console.log(" THIS WAS CREATED");



});

