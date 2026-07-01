import app from "./app.js";
import { connectDB } from "../src/config/db.js";
import {initSocket} from "../src/socket/index.js";

const PORT = process.env.PORT || 8080;

const startServer = async () => {
    await connectDB();

    const httpServer = app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });

    initSocket(httpServer);
};

startServer();