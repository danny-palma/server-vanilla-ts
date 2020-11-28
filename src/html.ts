import { createServer, IncomingMessage, ServerResponse } from "http";

const HOST = 'localhost';
const PORT = 3000;

const requestListener = (req: IncomingMessage, res: ServerResponse) => {
    res.setHeader('Content-Type', 'text/html')
    res.writeHead(200);
    res.end('<html><body><h1>hola :D</h1></body></html>');
};

const server = createServer(requestListener);

server.listen(PORT, () => {
    console.log(`server on port ${PORT}`);
});
