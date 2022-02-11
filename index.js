const express = require('express');
const app = express();
//inicializa bd
require('./database');

//settings
app.set('port', process.env.PORT || 5000);

//hay que parsear la url para poder recibir los datos por post 
app.use(express.urlencoded({extended: true})); 
app.use(express.json());   
//routes
app.use('/', require('./src/routes/index'));

app.listen(app.get('port'), () => {
    console.log("Servidor corriendo en el puerto ", app.get('port') );
})

//Ya pude ingresar datos en el esquema de info pero no probe con toda la informacion hay que hacerlo además
//hay que probar lo de utf8 en postman lo inserto bien pero hay que ver si es mejor manejarlo desde el back o en el front