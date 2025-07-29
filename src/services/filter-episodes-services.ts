import { FilterPodcast } from "../models/filter-podcast-model";
import { findEpisodes } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (url: string | undefined): Promise<FilterPodcast> => {
    
    let responseFormat: FilterPodcast = {
        statusCode: 0,
        body: []
    }
    
    const queryString = url?.split("?p=")[1] || "";
    const data = await findEpisodes(queryString);

    responseFormat.statusCode = data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

    responseFormat.body = data;

    return responseFormat;
}