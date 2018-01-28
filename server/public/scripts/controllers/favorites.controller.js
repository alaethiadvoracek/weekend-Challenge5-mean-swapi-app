myApp.controller("FavoritesController", ['SwapiService', function(SwapiService){
    const self = this; 
    self.starWarsFavorites = {}
    
    self.starWarsFavorites.people = SwapiService.starWars.people;
    self.starWarsFavorites.planets = SwapiService.starWars.planets;
    
    SwapiService.getMyFavorites();
    }]);