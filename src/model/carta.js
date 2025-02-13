const { Schema, model } = require('mongoose');
 
 
const cartaSchema = new Schema({
  nombre: { type: String, required: true },
  atributo: { type: String, required: true },
  ataque: { type: Number, min: 0 },
  defensa: { type: Number, min:0},
  imagen: {
    type: String,
    required: true,
  } // Campo para almacenar la ruta de la imagen
}, {
  timestamps: true,
});
 
 
module.exports = model('Carta', cartaSchema);