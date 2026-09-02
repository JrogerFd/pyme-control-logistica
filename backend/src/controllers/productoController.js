const Producto = require('../models/Producto');

exports.obtenerProductos = async (req, res) => {
  try {
    let productos = await Producto.findAll();
    if (productos.length === 0) {
      await Producto.bulkCreate([
        { codigo: 'PROD-001', nombre: 'Arroz Integral 1kg', categoria: 'Abarrotes', precioCompra: 5.00, precioVenta: 7.50, stock: 20, stockMinimo: 5, proveedor: 'Distribuidora Central' },
        { codigo: 'PROD-002', nombre: 'Aceite de Girasol 1L', categoria: 'Abarrotes', precioCompra: 10.00, precioVenta: 13.50, stock: 3, stockMinimo: 5, proveedor: 'OleoSur' },
        { codigo: 'PROD-003', nombre: 'Azúcar Refinada 1kg', categoria: 'Abarrotes', precioCompra: 4.50, precioVenta: 6.00, stock: 0, stockMinimo: 5, proveedor: 'Ingenio Azucarero' },
        { codigo: 'PROD-004', nombre: 'Detergente Multiuso 500g', categoria: 'Limpieza', precioCompra: 8.00, precioVenta: 11.00, stock: 12, stockMinimo: 4, proveedor: 'LimpioMax' }
      ]);
      productos = await Producto.findAll();
    }
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos', detalle: error.message });
  }
};

exports.crearProducto = async (req, res) => {
  try {
    const nuevo = await Producto.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear producto', detalle: error.message });
  }
};

exports.actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });

    await producto.update(req.body);
    res.json(producto);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar producto', detalle: error.message });
  }
};

exports.eliminarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });

    await producto.destroy();
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto', detalle: error.message });
  }
};
