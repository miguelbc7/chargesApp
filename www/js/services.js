angular
    .module('chargesApp')
    .factory('Charges', function ($http, $rootScope, $stateParams) {

        return {
            getCharges: function() {
                return $http.get('http://localhost:8000/api/charges')
            },
        };
    });