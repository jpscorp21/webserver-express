const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


//Una solicitud get cuando el path es "/", entra en la funcion

//Middleware es un callback que siempre se va a ejecutar no importa que peticion haga
//Cual
app.use( express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Jean',        
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})

//Middleware es para filtrar cualquier tipo de informacion
app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto ' + port);
});