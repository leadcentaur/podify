import env from "../util/validateEnv";
import axios, { AxiosRequestConfig } from "axios";
import { RequestHandler } from "express";
import { response } from "express";
import redisClient from "../app";

interface TokenData {
    access_token: string,
    token_type: string,
    expires_in: number,
    scope: string,
}


async function fetchTokenData() {

    const client_id = env.SPOTIFY_CLIENT_ID
    const client_secret = env.SPOTIFY_CLIENT_SECRET;
    const spotify_token_url = env.SPOTIFY_TOKEN_URL
    
    const auth_string = client_id + ':' + client_secret;
        const encode = (str: string):string => 
            Buffer.from(str, 'binary')
            .toString('base64');
    const auth_base64 = encode(auth_string)

    const response = await axios.request<TokenData>({
        url: spotify_token_url,
        method: "post",
        auth: {
            username: client_id,
            password: client_secret 
        },
        data: { "grant_type": "client_credentials", "scope": "user-read-playback-position"},
        headers: {
            "Authorization": "Basic " + auth_base64,
            "Content-Type": "application/x-www-form-urlencoded"
        }        
    });

    console.log("getting response: ", response);
    return response.data;
}

export const getToken: RequestHandler = async (req, res, next) => {
    try {
        const tokenData = await fetchTokenData();
        await redisClient.set("access_key", JSON.stringify(tokenData));
    } catch (error) {
        next(error);
    }
}
export default getToken;