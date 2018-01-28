myApp.service('SwapiService',['$http', function($http) {
    console.log('inside service');
    const self = this;


    self.searchResults = { list: []}
    self.favorites = {} 
    self.favorites.person = {list: []}
    self.favorites.planets = { list: []}

//GET requests//
self.searchWithKeyword = function(source, searchText){
    
    const config = {
        params: {search: searchText}
    };
    
    $http.get(`https://www.swapi.co/api/${source}`, config)
        .then( function(response){
        
        self.searchResults = response.data.results;       
    })
};//end getting search results 
//POST Requests//

self.addMyFavorites = function(favorite){
    $http.post('/favorites', favorite)
        .then(function(response) {
            console.log('post response', response);
        })
            .catch(function (response) {
            console.log('error on post', response);
        });
}//end adding to favorites list 

self.getMyFavorites = function (){
    $http.get('/favorites/person')
        .then( function(response){
            console.log('getting my favorite person: ', response.data);
                
            self.favorites.person = response.data;

        })
        .catch( function(error){
            console.log('error getting my favorite person: ', error);
                
        })
    $http.get('/favorites/planets')
        .then( function(response){
            console.log('getting my favorite planets: ', response.data);
                
            self.favorites.planets = response.data;

        })
        .catch( function(error){
            console.log('error getting my favorite planets: ', error);
                
        })
}
self.getMyFavorites();
}]);//end service 