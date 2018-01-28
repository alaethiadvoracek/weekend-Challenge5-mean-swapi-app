const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const swapiSchema = require('../modules/swapi.schema');

let Swapi = mongoose.model('Swapi', swapiSchema);

//GET requests//
router.get('/', (req, res) => {

    Swapi.find({}, (error, data) => {
        if (error) {
            console.log('error on find', error);
            res.sendStatus(500)
        }else{
            res.send(data);
        }
    });
}); //end GET

//POST requests//
router.post('/', (req, res) => {
    console.log('data to save: ', req.body);
    let personToAdd = new Swapi(req.body);

    personToAdd.save((error, savedPerson) => {
        if (error) {
            console.log('error on save: ', error);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    }); // end save

}); // end post route

//PUT requests// 








//DELETE requests//








module.exports = router;