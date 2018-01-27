const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const swapiSchema = require('../modules/swapi.schema');

let Swapi = mongoose.model('Swapi', swapiSchema);

//GET requests//







//POST requests//







//PUT requests// 








//DELETE requests//








module.exports = router;