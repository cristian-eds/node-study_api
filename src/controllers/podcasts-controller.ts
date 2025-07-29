import { IncomingMessage, ServerResponse } from 'http';
import {listEpisodes} from '../services/episodes-service'

export const getEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await listEpisodes();
    
    res.writeHead(200, { 'Content-Type': "application/json" });
    res.end(JSON.stringify(content))
}
