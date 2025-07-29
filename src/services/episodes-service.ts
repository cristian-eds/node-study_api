import { findEpisodes } from "../repositories/podcasts-repository";


export const listEpisodes = async () => {
    const data = await findEpisodes();
    return data;
}