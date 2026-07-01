import express from 'express';
import {engine} from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

import productRouter from './router/products/products.router.js'
import cartRouter from './router/cart/cart.router.js';
import viewsRouter from "./router/views/router.views.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// estáticos
app.use(express.static(path.join(process.cwd(), "src/public")));

// handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(process.cwd(), "src/views"));

app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);

// Vistas
app.use("/", viewsRouter);

export default app;