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

export let redisClient: RedisClientType;
(async () => {
  redisClient = redis.createClient();

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();

const app = express()

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/podcasts", podcastRoutes);
app.use("/api/spotify", spotifyRoutes)


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