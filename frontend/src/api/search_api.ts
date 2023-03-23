import { rejects } from "assert";
import axios from "axios";
import getToken from "../../../backend/src/controllers/token";
import { QueryItem, QueryResponse } from "../interfaces/interfaces";

//search api
export async function search(query: string) {

    const queryResponse: QueryItem[] = []
    const testingToken = "BQBYQKn6Z2NWt6f4oNnfLjTljZRVZEkOCgAM_FCp5mgk_ZDh7Rjf9lE2RpP-vkdVrFzyOlQArEy0gANEZPLHQ5Qww0jevf0pPNDTBvfLMizhPxHbiqbW8fjGNA"

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

   return queryResponse;
}
