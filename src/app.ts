import {Server} from '@hapi/hapi'
import { routes } from './routes';

export const init = async () => {
    const server = new Server({
        port: 3000,
        host: 'localhost'
    });

    routes(server)

    await server.start();
    console.log("Server running on %s", server.info.uri);
}

process.on("unhandledRejection", e => {
    console.log(e)
    process.exit(0)
})