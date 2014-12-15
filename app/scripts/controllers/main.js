'use strict';

/**
 * Main controller
 */
angular.module('forecastrApp')
    .controller('MainCtrl', function($scope, $http) {

        // $scope.name = "peter";  
        $scope.name = "test";

        var Main = window.Main || {};

        Main = {
            forecastUrl: "https://api.forecast.io/forecast/13232015d73f2d847200a4c70b20868b/",
            lat: '',
            lon: '',
            locationSet: false,
            setLocation: function() {
                navigator.geolocation.getCurrentPosition(this.setCoords, this.locationError);
            },
            setCoords: function(position) {
                console.log(position);

                Main.lat = position.coords.latitude;
                Main.lon = position.coords.longitude;
                this.locationSet = true;
            },
            locationError: function(err) {
                if (err.code == 1) {
                    console.log('not permitted to receive location');
                    // manually set the location to a default
                    this.locationSet = true;
                }
            },

            checkCoordsSet: function() {
                if (!this.locationSet) {
                    console.log('not yet');
                    window.setTimeout(this.checkCoordsSet, 100);
                } else {
                    console.log('ready');
                    // this.getWeatherUrl(); 
                    Main.getWeatherUrl();

                }
            },



            getWeatherUrl: function() {
                console.log('here');
                console.log('lat: ' + this.lat);
                // var url = this.forecastUrl + this.lat + "," + this.lon + "," + Date.now(); 
                // console.log("Url: " + url); 
            }

        };

        // Main.setLocation();     

        // Main.checkCoordsSet(); 

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                $scope.$apply(function() {
                    $scope.position = position;
                    console.log($scope.position); 
                });
            });
        }

    });