# 🛒 Commerce Backend

Backend de un sistema de e-commerce desarrollado con **Node.js**, **Express** y **MongoDB**, implementando una arquitectura por capas (Controller → Service → DAO), vistas con Handlebars y actualización en tiempo real mediante Socket.IO.

> Proyecto realizado como entrega final del curso de Backend de Coderhouse.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Handlebars
- Socket.IO
- dotenv

---

## 📂 Arquitectura del proyecto

```
src
│
├── config
├── controllers
├── dao
├── middlewares
├── models
├── public
├── router
│   ├── cart
│   ├── products
│   └── views
├── services
├── socket
├── utils
├── views
│   ├── layouts
│   ├── products.handlebars
│   ├── productDetail.handlebars
│   ├── cart.handlebars
│   └── realTimeProducts.handlebars
│
├── app.js
└── server.js
```

---

## ⚙️ Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
```

### 2. Entrar al proyecto

```bash
cd TU_REPOSITORIO
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Crear el archivo `.env`

```env
PORT=8080
MONGO_URI=tu_cadena_de_conexion
```

### 5. Ejecutar el proyecto

```bash
npm run dev
```

Servidor disponible en:

```
http://localhost:8080
```

---

# 📌 Funcionalidades

## Productos

- Obtener productos con paginación.
- Buscar producto por ID.
- Crear producto.
- Actualizar producto.
- Eliminar producto.

## Carritos

- Crear carrito.
- Visualizar carrito.
- Agregar productos.
- Eliminar productos.
- Actualizar cantidades.
- Vaciar carrito.

## Vistas

- `/products`
- `/products/:pid`
- `/carts/:cid`
- `/realtimeproducts`

## Tiempo real

Implementación de Socket.IO para:

- Agregar productos en tiempo real.
- Eliminar productos en tiempo real.
- Actualizar automáticamente la lista de productos en todas las pestañas abiertas.

---

# 🔗 Endpoints

## Productos

| Método | Endpoint |
|---------|----------|
| GET | `/api/products` |
| GET | `/api/products/:pid` |
| POST | `/api/products` |
| PUT | `/api/products/:pid` |
| DELETE | `/api/products/:pid` |

## Carritos

| Método | Endpoint |
|---------|----------|
| POST | `/api/carts` |
| GET | `/api/carts/:cid` |
| POST | `/api/carts/:cid/products/:pid` |
| DELETE | `/api/carts/:cid/products/:pid` |
| PUT | `/api/carts/:cid` |
| PUT | `/api/carts/:cid/products/:pid` |
| DELETE | `/api/carts/:cid` |

---

# 📸 Capturas

Podés agregar imágenes de:

- Listado de productos.
- Detalle del producto.
- Carrito.
- Vista en tiempo real.

---

# 👩‍💻 Autora

**Beatriz Escobar**

Proyecto desarrollado como parte del curso **Backend** de Coderhouse.
