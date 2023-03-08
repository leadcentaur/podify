import { InferSchemaType, Schema, model } from "mongoose";

const podcastSchema = new Schema({
    title: { type: String },
    description: { type: String }
}, {timestamps: true});

type Podcast = InferSchemaType<typeof podcastSchema>;
export default model<Podcast>("Podcast", podcastSchema);