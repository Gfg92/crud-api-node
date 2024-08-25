const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Categoria = require('./categoria');

const Producto = sequelize.define('Producto', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: 'productos'
});

// Relación Producto pertenece a Categoría
Producto.belongsTo(Categoria, {
  foreignKey: 'categoriaId',
  as: 'categoria'
});

module.exports = Producto;
