import express from "express";
import * as PodcastController from "../controllers/podcasts";

const router = express.Router();

router.get("/", PodcastController.getPodcasts);
router.get("/:podcastID", PodcastController.updatePodcast);

router.post("/", PodcastController.createPodcast);
router.delete("/:podcastId", PodcastController.deletePodcast);

export default router;