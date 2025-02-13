const mongoose = require('mongoose');
require('dotenv').config(); // Cargar variables de entorno

// Cadena de conexión
const URI = process.env.MONGO_URI || 'mongodb://localhost/yugibase';

mongoose.connect(URI)
  .then(() => console.log('✅ Conectado a MongoDB:', URI))
  .catch(err => console.error('❌ Error al conectar a MongoDB:', err));

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('📡 MongoDB está listo para recibir conexiones');
});

module.exports = connection;
