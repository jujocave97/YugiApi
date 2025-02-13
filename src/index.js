require('dotenv').config();  // Cargar variables de entorno

const app = require('./app'); // Importar configuración de Express
require('./database'); // Importar y ejecutar conexión a MongoDB

// Arrancar el servidor
const port = app.get('port') || 3000;
app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
