const express = require('express')
const delito = express() 
const bd = require('./bd.js')


delito.get("/api/delito/listartodos", (req, res) =>{
    let consulta = "SELECT * FROM delito"
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

delito.get("/api/delito/listarporid/:id", (req, res) =>{
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

delito.post("/api/delito/crear", (req, res) =>{
    let frmDatos = {
        nombre_delito:req.body.nombre_delito,
        descripcion_delito:req.body.descripcion_delito,
        descripcion_delito:req.body.descripcion_delito,
        grados_delitos_id_grado_delito:req.body.grados_delitos_id_grado_delito,
    }

    let consulta = 'INSERT INTO delito SET ?'
    
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

delito.put("/api/delito/editarporid/:id", (req, res) =>{

    let id = req.params.id
    let frmDatos = {
        nombre_delito:req.body.nombre_delito,
        descripcion_delito:req.body.descripcion_delito,
        descripcion_delito:req.body.descripcion_delito,
        grados_delitos_id_grado_delito:req.body.grados_delitos_id_grado_delito,
    }

    let consulta = 'UPDATE delito SET ? WHERE id_delito = ?'
    
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

delito.delete("/api/delito/borrarporid/:id", (req, res) =>{

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

module.exports = delito