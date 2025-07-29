import * as http from 'http';
import { filterEpisodes, getEpisodes } from './controllers/podcasts-controller';
import { Routes } from './routes/routes';

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse)=> {

        const [baseUrl, queryString] = req.url?.split('?') ?? ["",""];

        if(req.method === "GET" && baseUrl === Routes.LIST) {
            await filterEpisodes(req,res);
        } else if(req.method === "GET" && baseUrl === Routes.FILTER) {
            await getEpisodes(req, res);
        }

    }
);

const port = process.env.PORT;
server.listen(port, () => {console.log(`Server started on port ${port}`)});

