'use strict';

/**
 * Main controller
 */
angular.module('forecastrApp')
    .controller('MainCtrl', function($scope, $http) {

        // $scope.name = "peter";  
        $scope.name = "test";

        // var Main = window.Main || {};

        
        var forecastUrl: "https://api.forecast.io/forecast/13232015d73f2d847200a4c70b20868b/"; 
            

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                $scope.$apply(function() {
                    $scope.position = position; 
                    Main.lat = position.coords.latitude; 
                    console.log(Main.lat); 
                });
            });
        }

        


    });


