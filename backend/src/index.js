const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

// Importación de modelos
const Usuario = require('./models/Usuario');
const Producto = require('./models/Producto');
const Venta = require('./models/Venta');
const DetalleVenta = require('./models/DetalleVenta');

// Relaciones entre tablas
Usuario.hasMany(Venta, { foreignKey: 'usuarioId' });
Venta.belongsTo(Usuario, { foreignKey: 'usuarioId' });

Venta.hasMany(DetalleVenta, { foreignKey: 'ventaId' });
DetalleVenta.belongsTo(Venta, { foreignKey: 'ventaId' });

Producto.hasMany(DetalleVenta, { foreignKey: 'productoId' });
DetalleVenta.belongsTo(Producto, { foreignKey: 'productoId' });

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', project: 'PymeControl API' });
});

process.on('uncaughtException', (err) => console.error('Excepción:', err.message));
process.on('unhandledRejection', (err) => console.error('Promesa no manejada:', err.message));

const iniciarServidor = async () => {
  let conectado = false;
  while (!conectado) {
    try {
      await sequelize.sync({ force: false });
      console.log('✔ Base de datos de PymeControl conectada y sincronizada.');
      conectado = true;
    } catch (err) {
      console.log('⌛ Esperando conexión con MySQL... Reintentando en 3s.');
      await new Promise(res => setTimeout(res, 3000));
    }
  }

  app.listen(PORT, () => {
    console.log(`🚀 PymeControl API en http://localhost:${PORT}`);
  });
};

iniciarServidor();
