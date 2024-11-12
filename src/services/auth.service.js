const { PrismaClient } = require('@prisma/client');
const { compare } = require('bcryptjs');

const prisma = new PrismaClient()


exports.getUsers = () => { }

exports.getUserID = async (column, valor) => {
    try{
        const usuario = await prisma.user.findMany(
        {
            where: { [column]: valor }

        })
        return usuario.length > 0 
    } catch (error) {
        console.log(error);
        return null; 
    }
};


exports.CreateUser = async (data, passhash) => {
    try {
        console.log(passhash)
        const nuevoUsuario = await prisma.user.create({
            data: {
                email: data.email,
                password: passhash
            }
        })
        return nuevoUsuario 
    } catch (error) {
        console.error("Error al consultar el usuario:", error);
        throw error;
    }
}






