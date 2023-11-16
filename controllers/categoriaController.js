
const CategoriaModel = require('../models/categoriaModel');

exports.getCategorias = async (req, res) => {
    try {
        const categorias = await CategoriaModel.find();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createCategoria = async (req, res) => {
    try {
        const newCategoria = await CategoriaModel.create(req.body.nombre);
        res.status(201).json(newCategoria);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.getCategoriaById = async (req, res) => {
    try {
      const categoria = await CategoriaModel.findById(req.params.id);
      if (!categoria) {
        return res.status(404).json({ error: 'categoria no encontrada'});

      }
      res.status(200).json(categoria);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la categoria' });
    }
  };


exports.updateCategoria = async (req, res) => {
    try {
        console.log('Updating categoria...');
        
        const updatedCategoria = await CategoriaModel.update(req.params.id, req.body.nombre);

        console.log('Updated categoria:', updatedCategoria , req.params.id ,req.body);
        
        if (!updatedCategoria) {
            console.log('CategoriaModel not found');
            return res.status(404).json({ message: 'CategoriaModel not found' });
        }
        console.log('Categoria updated');
        res.status(200).json(updatedCategoria);
    } catch (error) {
        console.log('Error updating categoria:', error.message);
        res.status(400).json({ message: error.message });
    }
};

exports.deleteCategoria = async (req, res) => {
    try {
        await CategoriaModel.delete(req.params.id);
        res.status(200).json({ message: 'CategoriaModel deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// exports.deleteCategoria = async (req, res) => {
//     try {
//       const deletedCategoria = await CategoriaModel.delete(req.params.id);
//       if (!deletedCategoria) {
//         return res.status(404).json({ error: 'Producto no encontrado' });
//       }
//       res.status(200).json(deletedCategoria);
//     } catch (error) {
//       res.status(500).json({ error: 'Error al eliminar el producto' });
//     }
//   };
  
