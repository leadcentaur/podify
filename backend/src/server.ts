import app from "./app";
import env from "./util/validateEnv";
import mongoose from "mongoose";

const port = env.PORT;
const AutoIncrementFactory = require('mongoose-sequence');

const AutoIncrement = AutoIncrementFactory(mongoose.connect(env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log("Mongoose connted.")
        app.listen(port, () => {
            console.log("Server runnning on port: " + port);
        });
    })
    .catch(console.error)
);

export default AutoIncrement;