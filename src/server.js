const exprres = require("express")
const dotenv = require("dotenv")



dotenv.config({path: "./.env"})
port = process.env.HOST_PUERTO || 8000
app = exprres()
app.listen(port,(req,res)=> {
    console.log("conecatodo en: "+ port)
    
})