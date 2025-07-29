import { IncomingMessage, ServerResponse } from 'http';
import { listEpisodes } from '../services/episodes-service'
import { serviceFilterEpisodes } from '../services/filter-episodes-services';

export const getEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await listEpisodes();

    res.writeHead(200, { 'Content-Type': "application/json" });
    res.end(JSON.stringify(content))
}

export const filterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const queryString = req.url?.split("?p=")[1] || "";
    
    const content = await serviceFilterEpisodes(queryString);
    
    res.writeHead(200, { 'Content-Type': "application/json" });
    res.end(JSON.stringify(content))
}
