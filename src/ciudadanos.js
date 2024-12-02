//instancia express : sierve para api rest 
const express = require('express')
const ciudadano = express() 
const bd = require('./bd.js')

//Metodo POST :crear un aprendiz
ciudadano.post("/api/ciudadano/crear", (req, res) =>{
    //recibimos la data desde el formulario
    let frmDatos = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fecha_nacimiento: req.body.fecha_nacimiento,
        categoria_id_categoria: req.body.categoria_id_categoria
    }

    let consulta = 'INSERT INTO ciudadanos SET ?'
    
    bd.query(consulta, [frmDatos], (error, data) =>{
        if (!error) {
            res.status(200).send({
                status:true,
                mensaje: "Consulta exitosa",
                datos: data
            })
        }else{
            res.status(400).send({
                status:false,
                mensaje: "Error al intentar ejecutar la consulta",
                error: error
            })
        }
    })
})

//Listar todos los ciudadanos
ciudadano.get("/api/ciudadano/listartodos", (req, res) =>{
    let consulta = "SELECT * FROM ciudadanos order by nombre asc"
    bd.query(consulta, (error, data) =>{
        if (!error) {
            res.status(200).send({
                status:"OK",
                mensaje: "Consulta exitosa",
                datos: data
            })
        }else{
            res.status(400).send({
                status:"error",
                mensaje: "Error al intentar ejecutar la consulta",
                error: error
            })
        }
    })
})


//rutas para consultar bases de datos por id
ciudadano.get("/api/ciudadano/listarporid/:id", (req, res) =>{
    //recibimos el parametro
    let id = req.params.id
    let consulta = 'SELECT * FROM ciudadanos WHERE id_ciudadanos = ?'
    
    bd.query(consulta, [id], (error, data) =>{
        if (!error) {
            res.status(200).send({
                status:"OK",
                mensaje: "Consulta exitosa",
                datos: data
            })
        }else{
            res.status(400).send({
                status:"error",
                mensaje: "Error al intentar ejecutar la consulta",
                error: error
            })
        }
    })
})

//Eliminar por ID
ciudadano.delete("/api/ciudadano/borrarporid/:id", (req, res) =>{

    let id = req.params.id 
    let consulta = 'DELETE FROM ciudadanos WHERE id_ciudadanos = ?'
    
    bd.query(consulta, [id], (error, data) =>{
        if (!error) {
            res.status(200).send({
                status:"OK",
                mensaje: "Registro eliminado exitosamente",
                datos: data
            })
        }else{
            res.status(400).send({
                status:"error",
                mensaje: "Error al intentar ejecutar la consulta",
                error: error
            })
        }
    })
})


//editar un ciudadano
ciudadano.put("/api/ciudadano/editarporid/:id", (req, res) =>{

    let id = req.params.id
    let frmDatos = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fecha_nacimiento: req.body.fecha_nacimiento,
        categoria: req.body.categoria_id_categoria
    }

    let consulta = 'UPDATE ciudadanos SET ? WHERE id = ?'
    
    bd.query(consulta, [frmDatos, id], (error, data) =>{
        if (!error) {
            res.status(200).send({
                status:"OK",
                mensaje: "Actualizacion exitosa",
                datos: data
            })
        }else{
            res.status(400).send({
                status:"error",
                mensaje: "Error al intentar ejecutar la consulta",
                error: error
            })
        }
    })
})

module.exports = ciudadano