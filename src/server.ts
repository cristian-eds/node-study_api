import * as http from 'http';
import { filterEpisodes, getEpisodes } from './controllers/podcasts-controller';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

const server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse)=> {

        const [baseUrl, queryString] = request.url?.split('?') ?? ["",""];

        if(request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
            await filterEpisodes(request,response);
        } else if(request.method === HttpMethod.GET && baseUrl === Routes.FILTER) {
            await getEpisodes(request, response);
        }

    }
);

const port = process.env.PORT;
server.listen(port, () => {console.log(`Server started on port ${port}`)});

