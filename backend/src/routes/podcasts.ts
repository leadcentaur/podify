import express from "express";
import * as PodcastController from "../controllers/podcasts";

const router = express.Router();

router.get("/", PodcastController.getPodcasts);
//router.post("/", PodcastController.createPodcast);

export default router;