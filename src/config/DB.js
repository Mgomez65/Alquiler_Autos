const  { DataSource } = require("typeorm");
const dotenv = require("dotenv");

dotenv.config(); 

const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_host,
    port: process.env.DB_port,
    username: process.env.DB_username || "root",
    password: process.env.DB_password ,
    database: process.env.DB_nameDB,
    synchronize: true,
    logging: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],

})

const initializeDatabase = async () => {
    try {
      await AppDataSource.initialize(); 
      console.log("Conexión a la base de datos MySQL exitosa");
    } catch (error) {
      console.error("Error al conectar a la base de datos:", error);
    
    }
  };

  module.exports = {initializeDatabase,AppDataSource}