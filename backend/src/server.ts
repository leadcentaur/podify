import app from "./app";
import env from "./util/validateEnv";
import mongoose from "mongoose";

const port = env.PORT;

mongoose.connect(env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log("Mongoose connted.")
        app.listen(port, () => {
            console.log("Server runnning on port: " + port);
            console.log(env.SPOTIFY_TOKEN_URL)

        });
    })
    .catch(console.error)
