import { rejects } from "assert";
import axios from "axios";
import getToken from "../../../backend/src/controllers/token";
import { QueryItem, QueryResponse } from "../interfaces/interfaces";
import { UnauthorizedError, ConflictError } from "../errors/httpErrors";

async function fetchData(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init);
    if (response.ok) {

        const json = await response.json();
        console.log(json);
        const token = json.data.access_token;
        return token
    } else {
        const errorBody = await response.json();
        console.log("Error body is: " + errorBody);

        const errorMessage = errorBody.error;
        if (response.status === 401){
            throw new UnauthorizedError(errorMessage);
        } else if (response.status === 409) {
            throw new ConflictError(errorMessage);
        } else {
            throw Error("Request failed with status: " + response.status + "message: " + errorMessage);
        }
    }
}

async function getAccessToken() {
    const response = await fetchData(
        "/api/token", 
        {
            method: "GET"
        }
    );
    return response;
}


export async function search(query: string) {

    const queryResponse: QueryItem[] = []
    const token = await getAccessToken();

    const response = await axios.request({
        url: `https://api.spotify.com/v1/search?q=${query}&type=show&market=ES`,
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token,
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
