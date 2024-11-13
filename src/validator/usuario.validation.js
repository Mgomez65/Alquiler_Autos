const { validationResult, check } = require("express-validator");

const valition_usuario = () => {
  return [
  
   
    check("email").notEmpty().withMessage("El campo no puede estar vacío"), 
    check("email").isEmail().withMessage("El campo tiene que ser un correo válido"), 
    check("password").notEmpty().withMessage("la contraseña no puede estar vacia"),
    
    (req, res, next) => {


      const errors = validationResult(req); 

      if (!errors.isEmpty()) {
        const revisoError = errors.array().map((error) => error.msg)
        return res.status(400).json({ msg: revisoError }); 
      }

      next(); 
    },
  ];
};

module.exports = valition_usuario;
