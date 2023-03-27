import env from "../util/validateEnv";
import axios, { AxiosRequestConfig } from "axios";
import { RequestHandler } from "express";
import { response } from "express";
import redisClient from "../app";
import { getCache } from "../app";
import { RedisClientType } from "@redis/client";
import type { SetOptions } from "@redis/client";

interface TokenData {
    access_token: string,
    token_type: string,
    expires_in: number,
    scope: string,
}

function basicAuthEncode(client_id: string, client_secret: string) {
    const auth_string = client_id + ':' + client_secret;
        const encode = (str: string):string => 
            Buffer.from(str, 'binary')
            .toString('base64');
    const auth_base64 = encode(auth_string)
    return auth_base64;
}

async function fetchApiData() {

    const client_id = env.SPOTIFY_CLIENT_ID
    const client_secret = env.SPOTIFY_CLIENT_SECRET;
    const spotify_token_url = env.SPOTIFY_TOKEN_URL
    const auth_base64 = basicAuthEncode(client_id, client_secret);

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
    return response.data;
}

export const getTokenData: RequestHandler = async (req, res, next) => {
    try {

        const cache = await getCache();
        const tokenData = await fetchApiData();
        const cacheOptions: SetOptions = {
            EX: tokenData.expires_in as number,
            NX: true
        }
        await cache.set("access_token", JSON.stringify(tokenData), cacheOptions);
        res.send({
            fromCache: false,
            data: tokenData,
        })
    } catch (error) {
        console.log("ERROR IS", error);
        res.status(404).send("Data unavailable");
    }
}

export default getTokenData;
