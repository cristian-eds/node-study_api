import { Podcast } from "./podcast-model";

export interface FilterPodcast {
    statusCode: number,
    body: Podcast[]
}