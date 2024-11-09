const express = require("express");
const dotenv = require("dotenv");
const {initializeDatabase} = require("./config/DB")


class Server {
  constructor() {
    this.app = express();
    dotenv.config({ path: "./.env" });

   
    this.port = process.env.HOST_PUERTO || 8000;

    this.listen();
  }



  listen() {
    initializeDatabase()
    this.app.listen(this.port, () => {
      console.log(`Conectado en el puerto: ${this.port}`);
    });
  }
}


new Server();
