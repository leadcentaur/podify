import "dotenv/config";
import express from "express";
import { Request, Response, NextFunction } from "express";
import podcastRoutes from "./routes/podcasts";
import spotifyRoutes from "./routes/spotify"
import morgan from "morgan";
import createHttpError, {isHttpError} from "http-errors";
// import MongoStore from "connect-mongo";
import * as redis from 'redis';
import type { RedisClientType } from "@redis/client";
import session from 'express-session';
import connectRedis from 'connect-redis';
import cacheData from "./middleware/caching";
import { getTokenData } from "./controllers/token";

let isReady: boolean;
let redisClient: RedisClientType;

export async function getCache(): Promise<RedisClientType> {
    if (!isReady) {
      redisClient = redis.createClient()
      redisClient.on('error', err => console.log(`Redis Error: ${err}`))
      redisClient.on('connect', () => console.log('Redis connected'))
      redisClient.on('reconnecting', () => console.log('Redis reconnecting'))
      redisClient.on('ready', () => {
        isReady = true
        console.log('Redis ready!')
      })
      await redisClient.connect()
    }
    return redisClient
}
  
const app = express()

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/podcasts", podcastRoutes);
app.use("/api/spotify", spotifyRoutes)
app.use("/api/token", cacheData, getTokenData)


app.use((req, res, next) => {
    next(createHttpError(404, "Endpoint not found"));
});


//error handler
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    let errorMessage = "An unkown error had occured";
    let statusCode = 500;
    if(isHttpError(error)) {
        statusCode = error.status;
        errorMessage = error.message;
    }
    res.status(statusCode).json({ error: errorMessage });
});

export default app;