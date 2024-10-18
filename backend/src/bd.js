const mysql = require('mysql2')

const cnx = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'interpolice',
});

cnx.connect((error)=>{
    if (error) {
        console.log(`Error en la conexión \n ${error}`)
    }else{
        console.log('conexion exitosa')
    }
})

module.exports = cnx