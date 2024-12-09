const express = require('express')

const cors = require("cors")

const app = express()
require('dotenv').config()

app.use(cors())

app.use(express.json())

app.get('/', (req, res) =>{
    res.status(200).send({
        status:"OK",
        mensaje: "Bienvenido a la API REST de interpolice",
        datos: data
    })
})

app.use(require('./src/ciudadanos.js'))

const port = process.env.PORT || 3000

app.listen(port, () =>{
    console.log(`API REST encendida en el puerto ${port}`)
})