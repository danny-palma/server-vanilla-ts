import { resolveAny } from "dns";
import { createServer, IncomingMessage, ServerResponse } from "http";

const HOST = 'localhost';
const PORT = 3000;

const requestListener = (req: IncomingMessage, res: ServerResponse) => {
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment;filename=oceanpals.csv');
    res.writeHead(200);
    res.end('id,name,email\n1,Danny Palma,daniel@abc.com');
};

const server = createServer(requestListener);

server.listen(PORT, () => {
    console.log(`server on port ${PORT}`);
});
