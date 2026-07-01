import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "node:dns";

dotenv.config();
// Fuerza el uso de servidores DNS públicos para resolver correctamente
// los registros SRV de MongoDB Atlas en este entorno.
dns.setServers(["1.1.1.1", "8.8.8.8"]);

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("✅ Conectado a MongoDB");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};