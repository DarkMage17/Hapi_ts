"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const routes = (server) => {
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return "Hello world";
        }
    });
};
exports.routes = routes;
