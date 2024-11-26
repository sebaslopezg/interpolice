const mysql = require('mysql2')

const cnx = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
});

cnx.connect((error)=>{
    if (error) {
        console.log(`Error en la conexión \n ${error}`)
    }else{
        console.log('conexion exitosa')
    }
})

module.exports = cnx