import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { findEpisodes } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";


export const listEpisodes = async (): Promise<PodcastTransferModel> => {

    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    }

    const data = await findEpisodes();

    responseFormat = {
        statusCode: data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data
    };

    return responseFormat;
}