const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');
exports.consultasHome = (req, res) => {
    const promises = [];

    promises.push(Viaje.findAll({
        limit: 3
    }));
    promises.push(Testimonial.findAll({
        limit: 3
    }));
    //pasar los promises y ejecutarlos
    const resultado = Promise.all(promises);
    
    resultado.then(resultado => res.render('index', {
        pagina: 'Próximos Viajes',
        clase: 'home',
        viajes: resultado[0],
        testimoniales: resultado[1]
    }))
    .catch(e => console.log(e));
}