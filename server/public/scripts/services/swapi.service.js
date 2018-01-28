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
}//end get person

self.getPerson();

//POST requests//
self.addPerson = function (person) {
    $http.post('/swapi', person)
        .then(function(response) {
        console.log('post response', response);
    })
        .catch(function (response) {
        console.log('error on post', response);
    });
}//end 


//PUT requests//
self.searchButton = function(person) {
    $http.put(`/swapi/submit/${person._id}`, person)
    .then(function (response) {
        // console.log('get response', response);
        self.getPerson(); 
    })
    .catch(function (response) {
        console.log('error on put update person:', response);
    });
}


//DELETE requests//
self.deleteFavorite = function(id) {
    $http.delete(`/swapi/${id}`)
        .then(function (response) {
            // console.log('get response', response);
            self.getPerson();
        })
        .catch(function (response) {
            console.log('error on delete person from favorites', response);
        });
};




}]);//end service 