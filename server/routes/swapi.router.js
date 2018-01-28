const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


let swapiSchema = new mongoose.Schema(  
    //schema method takes in an object.
  {   
     

          
  }, { strict: false }

);//end Schema
let MyFavorite = mongoose.model('MyFavorite', swapiSchema);

router.post('/', (req, res) => {
    console.log('data to save: ', req.body);
    let favoriteToAdd = new MyFavorite(req.body);

    favoriteToAdd.save((error, savedFavorite) => {
        if (error) {
            console.log('error on save: ', error);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    }); // end save

}); // end post

//GET request//
router.get('/', (req,res)=>{
     console.log('getting data', response);
     
//find all in database 
    MyFavorite.find() = function(error, data) {
        if (error) {
            console.log('error on find:', error);
            res.sendStatus(500);
        } else {
            console.log('getting all of my favorites: ', data);
            res.send(data);
        }
    };
});


module.exports = router;








module.exports = router;