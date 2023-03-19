import { ConflictError, UnauthorizedError } from "../errors/httpErrors";
import { Axios } from "axios"
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

export async function search(query: string) {
    
    try {
        
        const queryResponse: QueryItem[] = []

        const testingToken = "BQAmM12nLbu-4J8_j6TO4rpiuQEq9-_Mximjg41pn2krFVY4kFn5xvJcQHqLl7Gnsi4xUWSPp1DYOS6GyNf0JpSSnmnTZf1zIDDLGUmozDc-te27N54QekjfiA"

        const response = await axios.request({
            url: `https://api.spotify.com/v1/search?q=${searchQuery}&type=show&market=ES`,
            method: "GET",
            headers: {
                "Authorization": "Bearer " + testingToken,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }        
        })

        const data = response.data.shows.items;
        data.forEach((element: QueryResponse) => {
            if (element.type == "show") {
                const item = {
                    name: element.name,
                    iurl: element.images[0].url,
                    id: element.id,
                    type: element.type
                } as QueryItem
                queryResponse.push(item);
            }
        });
        
      if (!Object.keys(queryResponse).length) { 
            return res.status(404).json("No results found."); } else {
        return res.status(200).json(queryResponse);
      }

    } catch (error) {
        next(error)
    }
}