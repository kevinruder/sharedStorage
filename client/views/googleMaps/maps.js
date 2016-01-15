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


        var Users =  RegisterStorage.find({}).fetch();

        GoogleMaps.ready('exampleMap', function(map) {
            // Add a marker to the map once it's ready


            var k;

            for(k in Users){

                var lat = Users[k].Lat;
                var long = Users[k].Long;

                placeMarker(lat,long);



            }

            function placeMarker(lat,long){

                var marker = new google.maps.Marker({
                    position: {
                        lat:parseFloat(long),
                        lng:parseFloat(lat)
                    },
                    map: map.instance

                });

                console.log(parseFloat(lat));

            }

        });


        // We can use the `ready` callback to interact with the map API once the map is ready.


    }



});

Template.Map.onCreated(function() {

    this.subscribe("storage");

});

