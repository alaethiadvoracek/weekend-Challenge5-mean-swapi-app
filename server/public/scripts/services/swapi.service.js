myApp.service('SwapiService',['$http', function($http) {
    console.log('inside service');
    const self = this;
    self.swapiList = { list: [] };
// GET REQUESTS //
self.getSwapiInfo = function(){

    $http.get('/https://swapi.co/api/people/')
        .then( function (response) {
            console.log('Getting info: ', response.data);
            self.swapiList.list = response.data;   
        })
        .catch(function(response) {
            console.log('error on Getting info: ', response); 
        });
}// end getSwapiInfo 

//Call the GET here.
self.getswapiInfo();



// POST REQUESTS //
self.addFavorite = function (favorite) {
    $http.post('/search', favorite)
        .then(function(response) {
        console.log('post response', response);
    })
        .catch(function (response) {
        console.log('error on post', response);
    });
}

//PUT requests//
self.searchButton = function(searchOption) {
    $http.put(`/https://swapi.co/api/people/${people._id}`, searchOption)
    .then(function (response) {
        self.getSwapiInfo(); 
    })
    .catch(function (response) {
        console.log('error on searching people', response);
    });
}

}]);
