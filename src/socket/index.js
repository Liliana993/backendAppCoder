import { Server } from "socket.io";

let io;

export const initSocket = (server) => {

    io = new Server(server);

    io.on("connection", (socket) => {

        console.log(`Cliente conectado: ${socket.id}`);

        socket.on("disconnect", () => {
            console.log(`Cliente desconectado: ${socket.id}`);
        });

    });

};

export const getIO = () => io;