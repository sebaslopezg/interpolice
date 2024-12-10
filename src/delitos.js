const express = require('express')
const delitos = express() 
const bd = require('./bd.js')


delitos.get("/api/delitos/listartodos", (req, res) =>{
    let consulta = "SELECT * FROM delitos"
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

delitos.get("/api/delitos/listarporid/:id", (req, res) =>{
    let id = req.params.id
    let consulta = 'SELECT * FROM delitos WHERE id_delito = ?'
    
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

delitos.post("/api/delitos/crear", (req, res) =>{
    let frmDatos = {
        nombre_delito:req.body.nombre_delito,
        descripcion_delito:req.body.descripcion_delito,
        descripcion_delito:req.body.descripcion_delito,
        grados_delitos_id_grado_delito:req.body.grados_delitos_id_grado_delito
    }

    let consulta = 'INSERT INTO delitos SET ?'
    
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

delitos.put("/api/delitos/editarporid/:id", (req, res) =>{

    let id = req.params.id
    let frmDatos = {
        nombre_delito:req.body.nombre_delito,
        descripcion_delito:req.body.descripcion_delito,
        descripcion_delito:req.body.descripcion_delito,
        grados_delitos_id_grado_delito:req.body.grados_delitos_id_grado_delito,
    }

    let consulta = 'UPDATE delitos SET ? WHERE id_delito = ?'
    
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

delitos.delete("/api/delitos/borrarporid/:id", (req, res) =>{

    let id = req.params.id 
    let consulta = 'DELETE FROM delitos WHERE id_delito = ?'
    
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

module.exports = delitos