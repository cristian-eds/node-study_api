import { IncomingMessage, ServerResponse, STATUS_CODES } from 'http';
import { listEpisodes } from '../services/episodes-service'
import { serviceFilterEpisodes } from '../services/filter-episodes-services';
import { StatusCode } from '../utils/status-code';
import { ContentType } from '../utils/content-type';
import { PodcastTransferModel } from '../models/podcast-transfer-model';

export const getEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content: PodcastTransferModel = await listEpisodes();

    res.writeHead(content.statusCode, { 'Content-Type': ContentType.JSON });
    res.end(JSON.stringify(content.body));
}

export const filterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    
    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);
    
    res.writeHead(content.statusCode, { 'Content-Type': ContentType.JSON });
    res.end(JSON.stringify(content.body))
}
