import { createServer, IncomingMessage, ServerResponse } from "http";

const HOST = 'localhost';
const PORT = 3000;

const requestListener = (req: IncomingMessage, res: ServerResponse) => {
    res.setHeader('Content-Type', 'application/json')
    res.writeHead(200);
    res.end(JSON.stringify({res: 'hola :D'}));
};

const server = createServer(requestListener);

server.listen(PORT, () => {
    console.log(`server on port ${PORT}`);
});
