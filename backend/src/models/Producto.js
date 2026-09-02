const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Producto = sequelize.define('Producto', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  codigo: { type: DataTypes.STRING, allowNull: false, unique: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  descripcion: { type: DataTypes.TEXT },
  categoria: { type: DataTypes.STRING },
  precioCompra: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  precioVenta: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  stock: { type: DataTypes.INTEGER, defaultValue: 0 },
  stockMinimo: { type: DataTypes.INTEGER, defaultValue: 5 },
  proveedor: { type: DataTypes.STRING }
}, { tableName: 'productos', timestamps: true });

module.exports = Producto;
