import { findEpisodes } from "../repositories/podcasts-repository"

export const serviceFilterEpisodes = async (podcastName: string) => {
    const data = await findEpisodes(podcastName);
    return data;
}