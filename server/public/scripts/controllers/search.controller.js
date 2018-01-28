myApp.controller("SearchController", ['SwapiService', function(SwapiService){
const self = this; 
self.starWars = {}

self.searchResults = SwapiService.searchResults;

self.toggle = {
    person: false,
    planets: false
};

self.search = function(selectedOption){
        if(selectedOption = 'person') {
                self.toggle.person = true;
                self.toggle.planets = false;
        }
        else if(selectedOption= 'planets'){
                self.toggle.person = false;
                self.toggle.planets = true;
        }
        SwapiService.searchService(selectedOption.source, selectedOption.searchText);
}//end search function 

self.addMyFavorites = function(myFavorite){
        
    myFavorite = self.selectedOption;
            
    SwapiService.addMyFavorites(myFavorite);
}
SwapiService.getMyFavorites();
}]);