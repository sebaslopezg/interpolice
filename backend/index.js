const express = require('express')

const cors = require("cors")

const app = express()
require('dotnet').config()

app.use(cors())

app.use(express.json())

app.use(require('./src/ciudadanos.js'))

const port = process.env.PORT || 3000

app.listen(port, () =>{
    console.log(`API REST encendida en el puerto ${port}`)
})