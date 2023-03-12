import axios from "axios";
import getToken from "./token";

export async function search(search_query: string) {

    const token = await getToken();
    const params = new URLSearchParams().append('q',search_query)

    const response = await axios.request({
        url: "https://api.spotify.com/v1/search",
        method: "GET",
        data: params,
        headers: {
            "Authorization": "Basic " + token,
            "Content-Type": "application/x-www-form-urlencoded"
        }        
    });

    console.log(response);
}