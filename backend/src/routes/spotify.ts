import express from "express";
import cacheToken from "../middleware/caching";
import * as SearchController from "../controllers/search"
import getToken from "../controllers/token";
import { SearchQueryValidator } from "../util/validators/queryValidator";

const router = express.Router();

//router.get("/search", SearchQueryValidator, SearchController.search);

export default router;