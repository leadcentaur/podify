import { cleanEnv } from "envalid";
import { port, str, url } from "envalid/dist/validators";

export default cleanEnv(process.env, {
    MONGO_CONNECTION_STRING: str(),
    PORT: port(),
    SESSION_SECRET: str(),
    SPOTIFY_CLIENT_ID: str(),
    SPOTIFY_CLIENT_SECRET: str(),
    SPOTIFY_TOKEN_URL: url(),
    REDIS_TOKEN_KEY: str(),
})