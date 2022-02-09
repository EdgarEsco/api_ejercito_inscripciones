const mongoose = require('mongoose');
const {settings} = require('./config');

mongoose.connect(settings.url_mongo_db, {})
.then( db => console.log("La base de datos esta conectada"))
.catch(err => console.log("Hubo un error al conectarse a la base de datos", err));