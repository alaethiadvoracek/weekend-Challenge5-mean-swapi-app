myApp.controller("SearchController", ['SwapiService', function(SwapiService){
const self = this; 

self.addedperson = {};

        self.getSwapiInfo = function(){
                SwapiService.getSwapiInfo();
        } //end get info function sent to service 

        self.searchButton = function(searchOption) {
                SwapiService.searchButton(searchOption);
            }//end search button function sent to service 

        self.addFavorite = function(favorite){  
                SwapiService.addFavorite(favorite);
        }//end posting favorite sent to service
}]);//end controller