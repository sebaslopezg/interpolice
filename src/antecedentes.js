const express = require('express')
const antecedentes = express() 
const bd = require('./bd.js')

antecedentes.get("/api/antecedentes/listartodos", (req, res) =>{
    let consulta = "SELECT * FROM antecedentes"
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

antecedentes.get("/api/antecedentes/listarporid/:id", (req, res) =>{
    let id = req.params.id
    let consulta = 'SELECT * FROM antecedentes WHERE id_antecedente = ?'
    
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

antecedentes.post("/api/antecedentes/crear", (req, res) =>{
    let frmDatos = {
        descripcion:req.body.descripcion,
        ciudadanos_id_ciudadanos :req.body.ciudadanos_id_ciudadanos,
        Delitos_id_delito:req.body.Delitos_id_delito,
        fecha:req.body.fecha
    }

    let consulta = 'INSERT INTO antecedentes SET ?'
    
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

antecedentes.put("/api/antecedentes/editarporid/:id", (req, res) =>{

    let id = req.params.id
    let frmDatos = {
        descripcion:req.body.descripcion,
        ciudadanos_id_ciudadanos :req.body.ciudadanos_id_ciudadanos,
        Delitos_id_delito:req.body.Delitos_id_delito,
        fecha:req.body.fecha
    }

    let consulta = 'UPDATE antecedentes SET ? WHERE id_antecedente = ?'
    
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

antecedentes.delete("/api/antecedentes/borrarporid/:id", (req, res) =>{

    let id = req.params.id 
    let consulta = 'DELETE FROM antecedentes WHERE id_antecedente = ?'
    
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

module.exports = antecedentes