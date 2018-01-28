myApp.controller("SearchController", ['SwapiService', function(SwapiService){
const self = this; 
self.starWarsPerson = {}


self.addPerson = function (person){
    SwapiService.addPerson(person);
}//function to tell service to get data



}]);