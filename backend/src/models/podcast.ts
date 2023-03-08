import mongoose, { InferSchemaType, Schema, model } from "mongoose";

const AutoIncrementFactory = require('mongoose-sequence');

const podcastSchema = new Schema({
    id: {type: Number, unique: true, min: 1, required: true},
    title: { type: String },
    description: { type: String }
});
podcastSchema.plugin(Auto)

type Podcast = InferSchemaType<typeof podcastSchema>;
export default model<Podcast>("Podcast", podcastSchema);