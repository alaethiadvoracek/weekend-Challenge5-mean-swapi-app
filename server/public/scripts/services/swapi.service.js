myApp.service('SwapiService',['$http', function($http) {
    console.log('inside service');
        const self = this;
        self.starWarsPerson = {}

//GET requests//
self.getPerson = function (){
    $http.get('https://www.swapi.co/api/people/')
        .then(function(response){
            self.starWarsPerson = response.data.data
            console.log(response);
        })
        .catch(function(response) {
            console.log('error on Get: ', response); 
        });
}



//POST requests//



//PUT requests//



//DELETE requests//





}]);//end service 