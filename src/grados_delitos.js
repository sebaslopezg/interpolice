const express = require('express')
const grados_delitos = express() 
const bd = require('./bd.js')

grados_delitos.get("/api/grados_delitos/listartodos", (req, res) =>{
    let consulta = "SELECT * FROM grados_delitos"
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

grados_delitos.get("/api/grados_delitos/listarporid/:id", (req, res) =>{
    let id = req.params.id
    let consulta = 'SELECT * FROM grados_delitos WHERE id_grado_delito = ?'
    
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

grados_delitos.post("/api/grados_delitos/crear", (req, res) =>{
    let frmDatos = {
        nombre:req.body.nombre,
        descripcion:req.body.descripcion
    }

    let consulta = 'INSERT INTO grados_delitos SET ?'
    
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

grados_delitos.put("/api/grados_delitos/editarporid/:id", (req, res) =>{

    let id = req.params.id
    let frmDatos = {
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
    }

    let consulta = 'UPDATE grados_delitos SET ? WHERE id_grado_delito = ?'
    
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

grados_delitos.delete("/api/grados_delitos/borrarporid/:id", (req, res) =>{

    let id = req.params.id 
    let consulta = 'DELETE FROM grados_delitos WHERE id_grado_delito = ?'
    
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

module.exports = grados_delitos