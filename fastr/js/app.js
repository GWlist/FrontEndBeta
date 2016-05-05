'use strict';

angular.module('myApp', [])
    .controller('MovieController', function($scope, $http){
      $scope.$watch('search', function() {
        fetch();
      });

      $scope.search = 11;

      function fetch(){
        $http.get("http://localhost:9000/service/items/" + $scope.search)
            .then(function(response){ $scope.details = response.data; });

        $http.get("http://www.omdbapi.com/?s=" + $scope.search)
            .then(function(response){ $scope.related = response.data; });
      }

      $scope.update = function(movie){
        $scope.search = movie.Title;
      };

      $scope.select = function(){
        this.setSelectionRange(0, this.value.length);
      }
    });
