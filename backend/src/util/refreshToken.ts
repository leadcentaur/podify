import env from "./util/validateEnv";
import createHttpError from "http-errors";

/* 


*/

async function generateToken(input: RequestInfo, init?: RequestInit) {

    const client_id = env.SPOTIFY_CLIENT_ID;
    const spotify_token_url = env.SPOTIFY_TOKEN_URL;
    const client_secret = env.SPOTIFY_CLIENT_SECRET;

    const data = {"grant_type": "client_credentials", "scope": "user-read-playback-position"}

    const response = await fetch(input, init);
    if (response.ok) {
        console.log(response)
        return response;
    } else {
        const errorBody = await response.json();
        const errorMessage = errorBody.error;
    
        if (response.status == 401) {
            throw createHttpError(401, "Bad or expired token.");
        }
        if (response.status == 403) {
            throw createHttpError(401, "Bad OAuth request.");
        }
        if (response.status == 429) {
            throw createHttpError(401, "The app has exceeded its rate limits.");
        } else {
            throw Error("Request failed with status: " + response.status + " " + errorMessage)
        }
    }
};
