const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');
const swapiRouter = require('./routes/swapi.router'); 

app.use(express.static('server/public/'));
app.use(bodyParser.json());

app.use('/swapi', swapiRouter);

/** ---------- MONGOOSE ------------ **/
const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/swapiDatabase';


mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log('mongoose is connected');    
});

mongoose.connection.on('error', () => {
    console.log('mongoose connection failed'); 
});


/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 4500);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
