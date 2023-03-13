import axios from "axios";
import { RequestHandler } from "express";
import getToken from "./token";

interface ImageObject {
    height: number,
    url: string,
    width: number,
}

interface QueryItem {
    name: string,
    iurl: string,
    id: string,
    type: string,
}

interface QueryResponse {
    available_markets?: [],
    copyrights?: [],
    description: string,
    explicit: boolean,
    id?: string,
    name: string,
    images: [ImageObject],
    type: string,
}


export const search: RequestHandler = async (req, res, next) => {

    try {

        const queryResponse: QueryItem[] = []
        const paramsBlock = req.url.split("?")[1];
        console.log("The params block: ", paramsBlock);

        const testingToken = "BQCyLpQHhsyGYBdMwiBRflUZ459FAykm0YqZNVKXJH67CjRwTZfBjGnCZUFJXOLffrvCo8BwzoZ8vHApRneudIN-csMPiZizKGjLPZ-f_COhWRuSQPxO2cXYNg";
        const search_query = "huber";

        const response = await axios.request({
            url: `https://api.spotify.com/v1/search?q=${search_query}&type=show&market=ES`,
            method: "GET",
            headers: {
                "Authorization": "Bearer " + testingToken,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }        
        })

        const data = response.data.shows.items;
        data.forEach((element: QueryResponse) => {
            if(element.type == "show") {
                const item = {
                    name: element.name,
                    iurl: element.images[0].url,
                    id: element.id,
                    type: element.type
                } as QueryItem
                queryResponse.push(item);
            }
        });

        res.status(200).json(queryResponse);
    } catch (error) {
        next(error)
    }
}