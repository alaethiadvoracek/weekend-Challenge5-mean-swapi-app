const mongoose = require('mongoose');


let schema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        born: {type: Date, default: Date.now}
    }

)//end schema 



module.exports = schema;