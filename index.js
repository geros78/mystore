const express = require('express')
const app = express()
app.get('/', function(req,res){
    res.send("Hola mundo")
})


//Se inicializa el servidor
const port= 3000
app.listen(port,()=> {
    console.log(`Levantando Server en el puerto: ${port}`)
})
