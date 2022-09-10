const express = require('express')
const app = express()
app.get('/', function(req,res){
    console.log(req)
    res.send(req)
})

app.post('/',(req,res)=>{
    res.send("Hola mundo 2")
})


//Se inicializa el servidor
const port= 3000
app.listen(port,()=> {
    console.log(`Levantando Server en el puerto: ${port}`)
})
