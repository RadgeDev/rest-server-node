

const express = require('express');
const cors = require('cors');




class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        this.usuariosPath = '/api/usuarios';

        //middleware
        this.middlewares();

        //rutas aplicacion
        this.routes();

    }

    middlewares() {

        //cors
        this.app.use(cors());

        //parseo lectura y parseo body
        this.app.use(express.json());


        this.app.use(express.static('public'));


    }


    routes() {

        this.app.use(this.usuariosPath, require('../routes/usuarios.js'));


    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ', this.port);
        });



    }
}


module.exports = Server;

