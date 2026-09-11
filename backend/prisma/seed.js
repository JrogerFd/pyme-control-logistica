const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Ejecutando seed de Prisma...');

  const adminEmail = process.env.SEED_ADMIN_EMAIL || 'admin@pymecontrol.com';
  const adminPassword = process.env.SEED_ADMIN_PASSWORD || 'admin123';
  const adminNombre = process.env.SEED_ADMIN_NAME || 'Roger Torrico';

  const passwordHash = await bcrypt.hash(adminPassword, 10);

  await prisma.usuario.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      nombre: adminNombre,
      email: adminEmail,
      password: passwordHash,
      rol: 'ADMINISTRADOR'
    }
  });

  const vendedorPass = await bcrypt.hash('vendedor123', 10);
  await prisma.usuario.upsert({
    where: { email: 'vendedor@pymecontrol.com' },
    update: {},
    create: {
      nombre: 'Vendedor Sistema',
      email: 'vendedor@pymecontrol.com',
      password: vendedorPass,
      rol: 'VENDEDOR'
    }
  });

  const catElectronica = await prisma.categoria.create({
    data: { nombre: 'Electrónica', descripcion: 'Tecnología' }
  });

  await prisma.producto.create({
    data: {
      codigo: 'PROD-001',
      nombre: 'Mouse Inalámbrico',
      precioCompra: 10.00,
      precioVenta: 20.00,
      stock: 15,
      stockMinimo: 5,
      categoriaId: catElectronica.id
    }
  });

  console.log('✅ Base de datos sembrada con éxito.');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
