import { findEpisodes } from "../repositories/podcasts-repository"

export const serviceFilterEpisodes = async (url: string | undefined) => {
    const queryString = url?.split("?p=")[1] || "";
    const data = await findEpisodes(queryString);
    return data;
}