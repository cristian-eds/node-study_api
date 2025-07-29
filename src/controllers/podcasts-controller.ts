import { IncomingMessage, ServerResponse, STATUS_CODES } from 'http';
import { listEpisodes } from '../services/episodes-service'
import { serviceFilterEpisodes } from '../services/filter-episodes-services';
import { StatusCode } from '../utils/status-code';
import { ContentType } from '../utils/content-type';
import { FilterPodcast } from '../models/filter-podcast-model';

export const getEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await listEpisodes();

    res.writeHead(StatusCode.OK, { 'Content-Type': ContentType.JSON });
    res.end(JSON.stringify(content))
}

export const filterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    
    const content: FilterPodcast = await serviceFilterEpisodes(req.url);
    
    res.writeHead(content.statusCode, { 'Content-Type': ContentType.JSON });
    res.end(JSON.stringify(content.body))
}
