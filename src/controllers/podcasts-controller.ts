import { IncomingMessage, ServerResponse, STATUS_CODES } from 'http';
import { listEpisodes } from '../services/episodes-service'
import { serviceFilterEpisodes } from '../services/filter-episodes-services';
import { StatusCode } from '../utils/status-code';
import { ContentType } from '../utils/content-type';

export const getEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await listEpisodes();

    res.writeHead(StatusCode.OK, { 'Content-Type': ContentType.JSON });
    res.end(JSON.stringify(content))
}

export const filterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    
    const content = await serviceFilterEpisodes(req.url);
    
    res.writeHead(StatusCode.OK, { 'Content-Type': ContentType.JSON });
    res.end(JSON.stringify(content))
}
