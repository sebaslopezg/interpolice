const express = require('express')

const cors = require("cors")

const app = express()

app.use(cors())

app.use(express.json())

app.use(require('./src/ciudadanos.js'))

app.listen(4100, () =>{
    console.log(`API REST encendida en el puerto 4100`)
})