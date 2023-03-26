import app from "./app";
import env from "./util/validateEnv";
import mongoose from "mongoose";
import axios from "axios"
import * as redis from 'redis';
import { token } from "morgan";
import type { RedisClientType } from "redis";

const port = env.PORT;

let redisClient: RedisClientType;
(async () => {
    redisClient = redis.createClient();
  
    redisClient.on("error", (error) => console.error(`Error : ${error}`));
  
    await redisClient.connect();
})();

async function cacheData(req: any, res: any, next: any) {
    let token;
    try {
        const cacheResults = await redisClient.get("access_token");
        if (cacheResults) {
            token = JSON.parse(cacheResults);
            res.send({
                fromCache: true,
                data: token,
            });
        } else {
            next();
        }
    } catch (error) {
        console.error(error);
        res.status(404)
    }
}

mongoose.connect(env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log("Mongoose connted.")
        app.listen(port, () => {
            console.log("Server runnning on port: " + port);
            console.log(env.SPOTIFY_TOKEN_URL)

        });
    })
    .catch(console.error)
