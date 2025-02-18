const cartaCtrl = {};
const connection = require('../database'); // Importar la conexión existente

// Obtener todas las cartas
cartaCtrl.getCartas = async (req, res) => {
    try {
        connection.query('SELECT * FROM cartas', (err, rows) => {
            if (err) {
                return res.status(500).json({
                    message: "Error al obtener las cartas",
                    error: err.message
                });
            }
            res.json(rows);
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener las cartas",
            error: error.message
        });
    }
};

// Crear una nueva carta
cartaCtrl.createCarta = async (req, res) => {
    try {
        const { nombre, atributo, ataque, defensa, imagen } = req.body;

        if (!nombre || !atributo || !ataque || !defensa || !imagen) {
            return res.status(400).json({ message: "Faltan datos" });
        }

        const query = 'INSERT INTO cartas (nombre, atributo, ataque, defensa, imagen) VALUES (?, ?, ?, ?, ?)';
        connection.query(query, [nombre, atributo, ataque, defensa, imagen], (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "Error al crear la carta",
                    error: err.message
                });
            }
            res.status(201).json({
                message: "Carta creada con éxito",
                cartaId: result.insertId
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear la carta",
            error: error.message
        });
    }
};

// Obtener una carta por ID
cartaCtrl.getCartaId = async (req, res) => {
    try {
        const query = 'SELECT * FROM cartas WHERE id = ?';
        connection.query(query, [req.params.id], (err, rows) => {
            if (err) {
                return res.status(500).json({
                    message: "Error al obtener la carta",
                    error: err.message
                });
            }
            if (rows.length === 0) {
                return res.status(404).json({ message: "Carta no encontrada" });
            }
            res.json(rows[0]);
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener la carta",
            error: error.message
        });
    }
};

// Eliminar una carta
cartaCtrl.deleteCarta = async (req, res) => {
    try {
        const query = 'DELETE FROM cartas WHERE id = ?';
        connection.query(query, [req.params.id], (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "Error al eliminar la carta",
                    error: err.message
                });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "Carta no encontrada" });
            }
            res.json({ message: "Carta eliminada con éxito" });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar la carta",
            error: error.message
        });
    }
};

// Actualizar una carta
cartaCtrl.updateCarta = async (req, res) => {
    try {
        const { nombre, atributo, ataque, defensa, imagen } = req.body;
        const query = 'UPDATE cartas SET nombre = ?, atributo = ?, ataque = ?, defensa = ?, imagen = ? WHERE id = ?';
        connection.query(query, [nombre, atributo, ataque, defensa, imagen, req.params.id], (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "Error al actualizar la carta",
                    error: err.message
                });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "Carta no encontrada" });
            }
            res.json({ message: "Carta actualizada con éxito" });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar la carta",
            error: error.message
        });
    }
};

module.exports = cartaCtrl;
