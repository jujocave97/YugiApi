const cartaCtrl = {};
const Carta = require('../model/carta');

cartaCtrl.getCartas = async(req,res) => {
    try{
        const cartas = await Carta.find();
        res.json(cartas);
    }catch (error){
        res.status(500).json({
            message: "Error al obtener las cartas", 
            error: error.message
        });
    }
}

cartaCtrl.createCarta = async(req,res) => {
    try{
        const {nombre, atributo, ataque, defensa, imagen} = req.body;
        if(!nombre || !atributo || !ataque || !defensa || !imagen){
            return res.status(400).json({
                message: "Faltan datos"
            });
        }

        const newCarta = new Carta ({
            nombre,
            atributo,
            ataque,
            defensa,
            imagen
        });
        await newCarta.save();

    }catch(error){
        res.status(500).json({
            message: "Error al crear la carta",
            error: error.message
        });
    }

    res.end();
}



cartaCtrl.getCartaId = async (req,res) => {
    try{
        const carta = await Carta.findById(req.params.id);
        if (!carta) return res.status(404).json({
            message: "Carta no encontrada"
        });
        res.json(carta);

    }catch(error){
        res.status(500).json({
            message: "Error al obtener la carta",
            error: error.message
        });
    }
}

cartaCtrl.deleteCarta = async (req, res) => {
    try{
        const carta = await Carta.findByIdAndDelete(req.params.id);
        if(!carta) return res.status(404).json({
            message: "Carta no encontrada"
        });

    }catch(error){
        res.status(500).json({
            message: "Error al eliminar la carta",
            error: error.message
        });
    }
}

cartaCtrl.updateCarta = async (req,res) => {
    try{
        
        const carta = await Carta.findByIdAndUpdate(req.params.id, req.body );
        if(!usuario) return res.status(404).json({
            message: "Carta no encontrada"
        });
        res.json({
            message:"Carta actualizada"
        });
    }catch(error){
        res.status(500).json({
            message: "Error al actualizar la carta",
            error: error.message
        });
    }
}

module.exports = cartaCtrl;