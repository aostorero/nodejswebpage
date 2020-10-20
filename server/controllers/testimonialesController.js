const Testimonial = require('../models/Testimoniales');
exports.mostrarTestimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    });
}

exports.agregarTestimonial = async (req, res) => {
    //validar los campos
    let {nombre, correo, mensaje} = req.body;
    let errores = [];
    if(!nombre) {
        errores.push({'mensaje': 'Agrega tu Nombre'});
    }
    if(!correo) {
        errores.push({'mensaje': 'Agrega tu Correo'});
    }
    if(!mensaje) {
        errores.push({'mensaje': 'Agrega tu Mensaje'});
    }
    //ver si hay errores
    if(errores.length > 0) {
        //muestra la vista con errors
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            errores,
            nombre, 
            correo,
            mensaje
        })
    } else {
        //almacena en db
        Testimonial.create({
            nombre,
            correo,
            mensaje
        }).then(testimonial => res.redirect('/testimoniales'))
        .catch(e => console.log(e));
    }
}