import env from "../util/validateEnv";
import axios from "axios";
import createHttpError from "http-errors";
import { response } from "express";

interface TokenData {
    access_token: string,
    token_type: string,
    expires_in: number,
    scope: string,
}

export async function getToken() {
    try {

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
        
        if (response.status == 200) {
            return response.data.access_token;
        } else {
            console.log("Failed to fetch token data from app.")
        }
    } catch {
        console.error(response);
    }

}

export default getToken;
