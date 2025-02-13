const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
app.set('port', port);

// Definir rutas
app.get('/', (req, res) => {
    res.send('BIENVENIDO A LA YUGIAPI!');
});
app.use('/api/yugiapi', require("./routes/carta"));

// Exportar `app` para que `index.js` lo use sin problemas
module.exports = app;
