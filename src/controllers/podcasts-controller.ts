import {IncomingMessage, ServerResponse } from 'http';

export const getEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {'Content-Type': "application/json"});
    res.end(JSON.stringify({
        name: "Teste"
    }))
}