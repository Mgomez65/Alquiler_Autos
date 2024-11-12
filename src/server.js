const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

this.port = process.env.HOST_PUERTO ;

app = express();
app.use(express.json())



app.use("/",require("./routers/auth.routes"))


app.listen(this.port, () => {
  console.log(`Conectado en el puerto: ${this.port}`);
});
    
   