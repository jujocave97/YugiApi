const { Router } = require('express');
const path = require('path');
const cartaCtrl = require('../controller/carta.controller');
const router = Router();
 
 
router.get('/', cartaCtrl.getCartas);
router.post('/crear', cartaCtrl.createCarta);
router.get('/:id', cartaCtrl.getCartaId);
router.delete('/:id', cartaCtrl.deleteCarta);
router.put('/:id', cartaCtrl.updateCarta);
 
 
module.exports = router; 