const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const sequelize = require('./config/database');

const Usuario = require('./models/Usuario');
const Producto = require('./models/Producto');
const Venta = require('./models/Venta');
const DetalleVenta = require('./models/DetalleVenta');

const authRoutes = require('./routes/authRoutes');
const productoRoutes = require('./routes/productoRoutes');

// Relaciones
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

app.use('/api/auth', authRoutes);
app.use('/api/productos', productoRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', project: 'PymeControl API Commercial' });
});

process.on('uncaughtException', (err) => console.error('Excepción:', err.message));
process.on('unhandledRejection', (err) => console.error('Promesa no manejada:', err.message));

const iniciarServidor = async () => {
  let conectado = false;
  while (!conectado) {
    try {
      await sequelize.sync({ force: false });
      
      // Usuario Demo por Defecto
      const adminExistente = await Usuario.findOne({ where: { email: 'admin@pymecontrol.com' } });
      if (!adminExistente) {
        const passwordHashed = await bcrypt.hash('admin123', 10);
        await Usuario.create({
          nombre: 'Roger Torrico',
          email: 'admin@pymecontrol.com',
          password: passwordHashed,
          rol: 'administrador'
        });
        console.log('👤 Usuario Administrador Creado: admin@pymecontrol.com / admin123');
      }

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
