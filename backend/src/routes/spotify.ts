import express from "express";
import * as SearchController from "../controllers/search"

const router = express.Router();

router.get("/search", SearchController.search);

export default router;