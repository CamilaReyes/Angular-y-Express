const express= require('express')
/* REQUERIMOS EXPRESS */
const app= express();
/* CONVERTIMOS EXPRESS EN UN OBJETO */

const ProductoRuta= require('./rutas/productoRutas')
/* REQUERIMOS EL MODULO DE RUTAS */

/* MIDDLEWARE
Logica de intercambio de informacion entre app */
app.use(express.json());
app.use('/api',ProductoRuta)
/* CREAMOS LA RUTA PARA ACCEDER A NUESTRA API */

module.exports= app;
/* EXPORTAMOS EL MODULO CON LA LOGICA DE EXPRESS */