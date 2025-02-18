// En lugar de Mongoose para MongoDB
// const mongoose = require('mongoose');

// Para MySQL
const mysql = require('mysql2');
require('dotenv').config(); // Cargar variables de entorno desde .env

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost', // Usando la variable de entorno
  user: process.env.DB_USER || 'root',          // Usando la variable de entorno
  password: process.env.DB_PASSWORD || 'password',     // Usando la variable de entorno
  database: process.env.DB_NAME || 'yugibase'  // Usando la variable de entorno
});
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL: ', err.stack);
    return;
  }
  console.log('Conexión a MySQL exitosa');
});

module.exports = connection;
