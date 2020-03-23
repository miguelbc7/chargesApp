angular
    .module('chargesApp')
    /*.controller('ChargesController', function($scope, Charges) {

        Charges.getCharges().success(function(response){
            $scope.friends = response;
        });
    });*/

    .controller('ChargesController', function($scope, $http, $location, $ionicPopup) {
        $scope.results = [];
        $scope.listCanSwipe = true
        $http.get('http://192.168.0.104/restaurant/public/api/charges')
        .success(function(data, status, headers,config){
            $scope.results = data; // for UI
        })
        .error(function(data, status, headers,config){
            console.log('data error');
        })
        .then(function(result){
            things = result.data;
        });

        $scope.url = function ( path ) {
            $location.path( path );
        }

        $scope.delete = function(index, id) {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Delete',
                template: 'Are you sure you want to delete this charge?'
            });

            confirmPopup.then(function(res) {
            if(res) {
                //$http.delete('http://localhost:8000/api/charges/' + id)
                $http({
                    method: 'DELETE',
                    url: 'http://192.168.0.104/restaurant/public/api/charges/' + id,
                })
                .success(function() {
                    console.log('Deleted !');
                    console.log(index);
                    $scope.results.data.splice(index, 1)
                });;
            } else {
                console.log('Deletion canceled !');
            }
            });
        }
    })

    .controller('ChargeDetailController', function($scope, $http, $stateParams) {
        $scope.result = "";
        
        $http.get('http://192.168.0.104/restaurant/public/api/charges/' + $stateParams.id)
        .success(function(data, status, headers,config){
            $scope.results = data; // for UI
        })
        .error(function(data, status, headers,config){
            console.log('data error');
        })
        .then(function(result){
            things = result.data;
        });
    })

    .controller('ChargeCreateController', function($scope, $http) {
        $scope.go = function(name) {
            $http({
                method: 'POST',
                url: 'http://192.168.0.104/restaurant/public/api/charges/store',
                data:  {'name':name},
            })
            .success(function(response){
                $scope.name = "";
            })
            .error(function(){
                console.log("error");
            });
        }
    })

    .controller('ChargeUpdateController', function($scope, $http, $stateParams) { 
        $http.get('http://192.168.0.104/restaurant/public/api/charges/' + $stateParams.id)
        .success(function(data, status, headers,config){
                $scope.name = data.data.name; // for UI
                console.log(data);
        })
        $scope.go = function(name) {
            console.log("edit charge: ",name);
            //$http.get('http://localhost:8000/api/charges/store', {'name':name})
            $http({
                method: 'PUT',
                url: 'http://192.168.0.104/restaurant/public/api/charges/' + $stateParams.id,
                data:  {'name':name},
            })
            .success(function(response){
                $scope.name = "";
            })
            .error(function(){
                console.log("error");
        });
        }
    });
