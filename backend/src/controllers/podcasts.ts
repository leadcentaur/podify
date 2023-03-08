import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose, { mongo, Schema } from "mongoose";
import PodcastModel from "../models/podcast";

export const getPodcasts: RequestHandler = async (req, res, next) => {
    try {
        const podcasts = await PodcastModel.find().exec();
        res.status(200).json(podcasts);
    } catch (error) {
        next(error)
    }
}

interface CreatePodcastBody {
    title?: string,
    description?: string,
}

export const createPodcast: RequestHandler<unknown, unknown, CreatePodcastBody, unknown> = async (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const podcastId = new mongoose.Types.ObjectId();

    try {
        if(!title) {
            throw createHttpError(400, "Podcast must have a title");
        }   
        const newPodcast = await PodcastModel.create({
            title: title,
            description: description
        });
        res.status(200)
    } catch (error) {
        next(error)
    }
}