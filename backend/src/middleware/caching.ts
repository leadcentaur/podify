import { RequestHandler } from "express";
import env from "../util/validateEnv";
import redisClient from "../app";
import { getCache } from "../app";

const cachedData: RequestHandler = async (req, res, next) => {
    const cache = await getCache();
    let results;
    try {
        const cacheResults = await cache.get("access_token");
        if (cacheResults) {
            results = JSON.parse(cacheResults);
            res.send({
                fromCache: true,
                data: results,
            });
            console.log("successfully cached results")
        } else {
            next();
        }
    } catch (error) {
        console.error(error);
        res.status(404)
    }
}

export default cachedData;