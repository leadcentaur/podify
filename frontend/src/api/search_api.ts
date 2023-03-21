import axios from "axios";
import getToken from "../../../backend/src/controllers/token";

interface ImageObject {
    height: number,
    url: string,
    width: number,
}

export interface QueryItem {
    name: string,
    iurl: string,
    desc: string,
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
    external_urls?: {spotify: string}
}

export async function search(query: string) {
    try {
        
        const queryResponse: QueryItem[] = []
        const testingToken = "BQB28Y2lZv5zunTnKvoZJAikvRfagozGKPbrtQAKZA4Dc-qF1SCVEs7abc6irRRzpM9FGe8jN1uMo1rRuWqAXH3ScU5EcYOYDMNjTlbdvAjejF637Cau38CRHQ";

        const response = await axios.request({
            url: `https://api.spotify.com/v1/search?q=${query}&type=show&market=ES`,
            method: "GET",
            headers: {
                "Authorization": "Bearer " + testingToken,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }        
        })

        const data = response.data.shows.items;
        data.forEach((element: QueryResponse) => {
            if (element.type === "show") {
                const item = {
                    name: element.name,
                    iurl: element.images[0].url,
                    desc: element.description,
                    id: element.id,
                    type: element.type,
                    surl: element.external_urls?.spotify,
                } as QueryItem
                queryResponse.push(item);
            }
        });
        
      if (!Object.keys(queryResponse).length) { 
            return queryResponse } else {

        console.log(queryResponse);
        return queryResponse;
      }

    } catch (error) {
        console.log("error: " + error);
    }
}