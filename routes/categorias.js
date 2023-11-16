const express = require('express');
const categoriaController = require('../controllers/categoriaController');
const route = express.Router();

route.get('/', categoriaController.getCategorias);

// route.get('/:id', categoriaController.getCategoriaById);

route.post('/', categoriaController.createCategoria);

route.put('/:id', categoriaController.updateCategoria);

route.delete('/:id', categoriaController.deleteCategoria);

module.exports = route;
