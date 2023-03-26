import { RequestHandler } from "express";
import env from "../util/validateEnv";
import redisClient from "../app";

export const cacheToken: RequestHandler = async (req, res, next) => {
    let tokenData;
    try {
        const cachedToken = await redisClient.get("access_token");
        if (cachedToken) {
            tokenData = JSON.stringify(cachedToken);
            res.send({
                fromCache: true,
                data: tokenData,
            })
        }
        next();
    } catch (error) {
        next(error);
    }
}