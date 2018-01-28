myApp.service('SwapiService',['$http', function($http) {
    console.log('inside service');
        const self = this;
    let results = self.searchResults = {list: []}
    let person = self.starWars.person = {list: []}
    let planets = self.starWars.planets = { list: []}

//GET requests//
self.searchWithKeyword = function(source, searchText){
    
    const config = {
        params: {search: searchText}
    };
    
    $http.get(`https://www.swapi.co/api/${source}`, config)
        .then( function(response){
        
        results = response.data.results;       
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
                
            person = response.data;

        })
        .catch( function(error){
            console.log('error getting my favorite person: ', error);
                
        })
    $http.get('/favorites/planets')
        .then( function(response){
            console.log('getting my favorite planets: ', response.data);
                
            planets = response.data;

        })
        .catch( function(error){
            console.log('error getting my favorite planets: ', error);
                
        })
}
self.getMyFavorites();
}]);//end service 