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
    }



});

Template.Map.onCreated(function() {

    var gmarkers = [];

    this.subscribe("storage");

    var ready;

    GoogleMaps.ready('exampleMap', function(map) {

        var Users =  RegisterStorage.find({}).fetch();

        // Add a marker to the map once it's ready

        ready = true;
        console.log(Users);

        placeMarker(Users);


    });

    Tracker.autorun(function(){


            var _spaceNeeded = Session.get("spaceNeeded");

            if(_spaceNeeded == null){
                _spaceNeeded = 0;
            }

            var Users =  RegisterStorage.find({Space:{$gt:_spaceNeeded}}).fetch();

            if(GoogleMaps.loaded() && ready == true){

                removeMarkers();

                var k;

                for(k in Users){
                    placeMarker(Users[k])
                }

                //addMarkers();

            }



    });

    function placeMarker(User){


            var lat = User.Lat;
            var long = User.Long;
            var name = User.Name;



            var marker = new google.maps.Marker({
                position: {
                    lat: parseFloat(long),
                    lng: parseFloat(lat)
                },
                map: GoogleMaps.maps.exampleMap.instance

            });

            // Creates the info window and the content inside of it

            var infowindow = new google.maps.InfoWindow({
                content: '<div id="infowin"><p>'+name+'"s storage </p></div>'
            });

            //adds click eventlistener and attaches it to the map instance and marker !

            marker.addListener('click',function(){
                infowindow.open(GoogleMaps.maps.exampleMap.instance, this);
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

