//importar express y rutas
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const configs = require('./config');

/*db.authenticate()
    .then(() => console.log('db conectada'))
    .catch(e => console.log(e));*/
//configurar express
const app = express();
//habilitar pug
app.set('view engine', 'pug');
//añadir las vistas
app.set('views', path.join(__dirname, './views'));
//cargar una carpeta estatica llamada public
app.use(express.static('public'));
//ver si estamos en desarrollo
const config = configs[app.get('env')];
//creamos var para el sitio web
app.locals.titulo = config.nombresitio;
//muestra el año actual
app.use((req, res, next) => {
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    //para detectar en que pagina esta el usuario
    res.locals.ruta = req.path;
    //console.log(res.locals);
    return next();
})
//ejecutamos el body parser, para poder entender lo que mandan del formulario
app.use(bodyParser.urlencoded({extended: true}));
//cargar las rutas
app.use('/', routes());

app.listen(3000);