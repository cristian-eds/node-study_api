import { IncomingMessage, ServerResponse } from 'http';
import { listEpisodes } from '../services/episodes-service'
import { serviceFilterEpisodes } from '../services/filter-episodes-services';

export const getEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await listEpisodes();

    res.writeHead(200, { 'Content-Type': "application/json" });
    res.end(JSON.stringify(content))
}

export const filterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    
    const content = await serviceFilterEpisodes(req.url);
    
    res.writeHead(200, { 'Content-Type': "application/json" });
    res.end(JSON.stringify(content))
}
