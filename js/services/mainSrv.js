angular.module('mainApp').service('mainSrv', function($http) {
    this.test = "1 2 3"

    this.getParksData = function() {
        return $http({
            method: 'get',
            url: 'http://www.utah.gov/locationaware/getNearByLocations.html?&locationType=91&type=json&listSize=10&zipCode=84020'
        })
    }
})