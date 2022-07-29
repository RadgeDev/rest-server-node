const { response } = require('express');

const usuariosGet = (req, res = response) => {

    const {q,nombre,apikey} = req.query
    res.json({

        msg: 'get_controoller',
        q,
        nombre,
        apikey
    });

};


const usuariosPost = (req, res = response) => {

    const  {nombre, edad} =  req.body;

    res.json({

        msg: 'post -controller',
        nombre,
        edad
    });

};


const usuariosPut = (req, res = response) => {
    const  id  =  req.params.id;
    res.json({

        msg: 'put -controller',
        id 
    });

};


const usuariosDelete = (req, res = response) => {
    res.json({

        msg: 'delete  -controller'
    });

};



const usuariosPatch = (req, res = response) => {
    res.json({

        msg: 'patch  -controller'
    });

};















module.exports = {
    usuariosGet, usuariosPost, usuariosPut, usuariosDelete ,usuariosPatch
}