# 🏪 PymeControl

**Sistema de Gestión de Inventario y Ventas para Comercio Local**

## 📋 Descripción General del Proyecto

**PymeControl** es un sistema de gestión de inventario y ventas diseñado específicamente para pequeños y medianos comercios locales (PYMEs). Su objetivo es digitalizar y centralizar el control de los productos, las ventas diarias y la información financiera del negocio en una única plataforma, reduciendo la dependencia de hojas de cálculo y procesos manuales propensos a errores.

El sistema permite a los comerciantes registrar y administrar su catálogo de productos, procesar ventas de forma rápida e intuitiva, recibir alertas automáticas cuando el stock de un producto alcanza niveles mínimos, generar reportes financieros que faciliten la toma de decisiones y controlar el acceso al sistema mediante roles de usuario. Todo ello con una interfaz moderna, responsiva y de alto rendimiento, accesible desde cualquier dispositivo.

---

## ✅ Requerimientos Funcionales (RF)

| Código | Requerimiento |
|--------|---------------|
| **RF-01** | **Registro de productos:** El sistema debe permitir registrar, editar, consultar y eliminar productos, incluyendo datos como nombre, descripción, categoría, precio de compra, precio de venta, proveedor y cantidad en stock. |
| **RF-02** | **Gestión de ventas:** El sistema debe permitir crear nuevas ventas, agregar uno o varios productos al carrito, calcular el total automáticamente, registrar el método de pago y descontar automáticamente el stock vendido. |
| **RF-03** | **Alertas de stock bajo:** El sistema debe notificar al usuario cuando un producto alcanza o está por debajo del umbral mínimo de stock configurado, permitiendo reabastecer el inventario a tiempo. |
| **RF-04** | **Reportes financieros:** El sistema debe generar reportes de ventas, ingresos, gastos y ganancias en períodos configurables (diario, semanal, mensual), con opción de exportarlos en formatos como PDF o CSV. |
| **RF-05** | **Control de acceso:** El sistema debe contar con autenticación de usuarios (inicio de sesión) y gestión de roles (administrador, vendedor), restringiendo el acceso a funcionalidades según el nivel de permiso de cada rol. |

---

## ⚙️ Requerimientos No Funcionales (RNF)

| Código | Requerimiento |
|--------|---------------|
| **RNF-01** | **Rendimiento:** El tiempo de respuesta del sistema para las consultas y operaciones más comunes debe ser inferior a **1.5 segundos**. |
| **RNF-02** | **Interfaz responsiva:** La aplicación debe ser completamente responsiva y adaptable a distintos tamaños de pantalla (escritorio, tablet y móvil). |
| **RNF-03** | **Seguridad / Encriptación:** Las contraseñas y los datos sensibles de los usuarios deben almacenarse y transmitirse de forma **encriptada** (por ejemplo, hash seguro y cifrado en tránsito mediante HTTPS). |
| **RNF-04** | **Disponibilidad:** El sistema debe garantizar una **disponibilidad mínima del 99%** del tiempo de operación. |

---

## 👥 Historias de Usuario (User Stories)

| ID | Como... | Quiero... | Para... |
|----|---------|-----------|---------|
| **HU-01** | Como administrador del comercio, | quiero registrar y administrar el catálogo de productos con su precio y stock, | para mantener el inventario actualizado y disponible para la venta. |
| **HU-02** | Como vendedor, | quiero registrar ventas de forma rápida seleccionando los productos del inventario, | para agilizar la atención al cliente y mantener un registro exacto de las transacciones. |
| **HU-03** | Como administrador del comercio, | quiero recibir alertas automáticas cuando el stock de un producto esté bajo, | para realizar pedidos de reposición a tiempo y evitar quedarme sin productos. |
| **HU-04** | Como dueño del negocio, | quiero consultar reportes financieros de ventas e ingresos, | para evaluar el desempeño del comercio y tomar decisiones informadas. |

---

## 📊 Tablero Kanban Inicial

### To Do 📝
- [ ] Crear el diseño de la base de datos (productos, ventas, usuarios).
- [ ] Implementar el módulo de registro y administración de productos (RF-01).
- [ ] Implementar el módulo de gestión de ventas (RF-02).
- [ ] Desarrollar el sistema de alertas de stock bajo (RF-03).
- [ ] Generar los reportes financieros (RF-04).
- [ ] Implementar el control de acceso y roles (RF-05).

### In Progress 🔄
- [ ] Definición de la arquitectura del proyecto y stack tecnológico.

### Done ✅
- [ ] Análisis de requisitos del sistema (RF y RNF).
- [ ] Definición de historias de usuario y tablero Kanban inicial.
- [ ] Creación y configuración del repositorio de código.

---

## 🚀 Configuración y Comandos de Git

Los siguientes comandos configuran la identidad del usuario, inicializan el repositorio y realizan el commit inicial del proyecto.

```bash
# Inicializar el repositorio
git init

# Configurar la identidad del usuario
git config user.name "JrogerFd"
git config user.email "roger.torrico728@gmail.com"

# Agregar los archivos al área de preparación
git add README.md

# Crear el commit inicial
git commit -m "chore: commit inicial - README.md del proyecto PymeControl"
```

### 📌 Comandos para conectar el repositorio local con GitHub

```bash
# Agregar el repositorio remoto de GitHub
git remote add origin https://github.com/JrogerFd/pyme-control-logistica.git

# Renombrar la rama principal a 'main'
git branch -M main

# Subir la rama 'main' al repositorio remoto
git push -u origin main
```

