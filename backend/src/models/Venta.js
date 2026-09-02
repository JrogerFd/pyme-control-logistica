const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Venta = sequelize.define('Venta', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  total: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  metodoPago: { type: DataTypes.ENUM('Efectivo', 'Tarjeta', 'QR'), defaultValue: 'Efectivo' }
}, { tableName: 'ventas', timestamps: true });

module.exports = Venta;
