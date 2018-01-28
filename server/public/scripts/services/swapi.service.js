myApp.service('SwapiService',['$http', function($http) {
    console.log('inside service');
        const self = this;
        self.searchResults = {list: []}
        self.starWars.people = {list: []}
        self.favorites.planets = { list: []}

//GET requests//
self.searchWithKeyword = function(source, searchText){
    
    const config = {
        params: {search: searchText}
    };
    
    $http.get(`https://www.swapi.co/api/${source}`, config)
        .then( function(response){
        
        self.searchResults.list = response.data.results;       
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
    $http.get('/favorites/people')
        .then( function(response){
            console.log('getting my favorite people: ', response.data);
                
            self.starWars.people.list = response.data;

        })
        .catch( function(error){
            console.log('error getting my favorite people: ', error);
                
        })
    $http.get('/favorites/people')
        .then( function(response){
            console.log('getting my favorite planets: ', response.data);
                
            self.starWars.planets.list = response.data;

        })
        .catch( function(error){
            console.log('error getting my favorite planets: ', error);
                
        })
}
self.getMyFavorites();
}]);//end service 