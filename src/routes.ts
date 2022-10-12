import { Request, ResponseToolkit, Server } from "@hapi/hapi";

export const routes = (server: Server) => {
    server.route({
        method: 'GET',
        path: '/',
        handler: (request: Request, h: ResponseToolkit) => {
            return "Hello world";
        }
    })
}