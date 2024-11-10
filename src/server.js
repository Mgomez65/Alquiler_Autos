const express = require("express");
const dotenv = require("dotenv");



class Server {
  constructor() {
    this.app = express();
    dotenv.config({ path: "./.env" });

   
    this.port = process.env.HOST_PUERTO ;

    this.listen();
  }



   async listen() {
    this.app.listen(this.port, () => {
      console.log(`Conectado en el puerto: ${this.port}`);
    });
  }
}


new Server();
