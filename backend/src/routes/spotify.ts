import express from "express";
import * as SearchController from "../controllers/search"
import { SearchQueryValidator } from "../util/validators/queryValidator";

const router = express.Router();

router.get("/search", SearchQueryValidator, SearchController.search);

export default router;