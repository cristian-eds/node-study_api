import * as http from 'http';
import { getEpisodes } from './controllers/podcasts-controller';

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse)=> {
        if(req.method === "GET") {
            await getEpisodes(req, res);
        }
    }
);

const port = process.env.PORT;
server.listen(port, () => {console.log(`Server started on port ${port}`)});

