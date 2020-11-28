import { createServer, IncomingMessage, ServerResponse } from "http";
import { readFile } from "fs/promises";

const HOST = 'localhost';
const PORT = 3000;

const requestListener = (req: IncomingMessage, res: ServerResponse) => {
    switch (req.url) {
        case '/':
            readFile('./index.html').then((value) => {
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(value.toString());
            }).catch(err => {
                res.writeHead(500);
                res.end(`${err}`)
            })
            break;
        case '':
        default:
            res.writeHead(404);
            res.end('resouce not found')
            break
    }



};

const server = createServer(requestListener);

server.listen(PORT, () => {
    console.log(`server on port ${PORT}`);
});
