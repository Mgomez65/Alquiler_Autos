const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const serviceAuth = require("../services/auth.service");

const register = async (req, res) => {
    try {
        const data = req.body;
        const password = req.body.password;
        console.log(data)

        console.log(await serviceAuth.getUserID("email", data.email))

        if (await serviceAuth.getUserID("email", data.email)) {
            return res.status(400).json({ msj: "El correo ya está en uso, prueba con otro" });
        }

    
        const passhash = await bcryptjs.hash(password, 10);
        console.log(passhash);

        const usuario = await serviceAuth.CreateUser(data, passhash);

        res.status(200).json({ msj: "Usuario registrado exitosamente",usuario });
    } catch (error) {
        console.error('Error en el registro:', error);
        return res.status(500).send('Error interno del servidor');
    }
};

const login = (req, res) => {
    // Aquí va la lógica del login
};

module.exports = { register };
