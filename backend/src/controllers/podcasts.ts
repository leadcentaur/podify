import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
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

export const getPodcast: RequestHandler = async (req, res, next) => {
    const podcastId = req.params.podcastId;
    try {
        if (!mongoose.isValidObjectId(podcastId)) {
            throw createHttpError(400, "Invalid podcast ID");
        }

        const podcast = await PodcastModel.findById(podcastId).exec();
        if (!podcast) {
            throw createHttpError(404, "Podcast not found");
        }
        
        res.status(200).json(podcast);

    } catch (error) {
        next(error);
    }
}

export const createPodcast: RequestHandler<unknown, unknown, CreatePodcastBody, unknown> = async (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    try {
        if(!title) {
            throw createHttpError(400, "Note mut have a title");
        }
        if(!description) {
            throw createHttpError(400, "Podcast must have a description");
        }
        const newPodcast = await PodcastModel.create({
            title: title,
            description: description,
        });
        res.status(201).json(newPodcast);
    } catch (error) {
        next(error);
    }
};

interface UpdateNoteParams {
    podcastId: string,
}

interface UpdatePodcastBody {
    title?: string,
    description: string,
}

export const updatePodcast: RequestHandler<UpdateNoteParams, unknown, UpdatePodcastBody, unknown> = async (req, res, next) => {

    const podcastId = req.params.podcastId;
    const newPodcastTitle = req.body.title;
    const newPodcastDescription = req.body.description;
    //const authenticatedUserId = req.session.userId;

    try {
        if (!mongoose.isValidObjectId(podcastId)){
            throw createHttpError(404, "Podcast not found");
        }
        const podcast = await PodcastModel.findById(podcastId).exec();
        if (!podcast) {
            throw createHttpError(404, "Podcast not found")
        }

        podcast.title = newPodcastTitle;
        podcast.description = newPodcastDescription;
        const updatedPodcast = await podcast.save();
        res.status(200).json(updatedPodcast);
    
    } catch (error) {
        next(error)
    }
};

export const deletePodcast: RequestHandler = async (req, res, next) => {

    const podcastId = req.params.podcastId;
    //const authenticatedUserId = req.session.userId;

    try {
        if (!mongoose.isValidObjectId(podcastId)){
            throw createHttpError(404, "Podcast not found");
        }
        const podcast = await PodcastModel.findById(podcastId).exec();
        if (!podcast) {
            throw createHttpError(404, "Podcast not found")
        }

        await podcast.remove();
        res.sendStatus(204);
    } catch (error) {
        next(error)
    }
};


