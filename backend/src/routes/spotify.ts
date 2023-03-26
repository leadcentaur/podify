import express from "express";
import { cacheToken } from "../controllers/caching";
import * as SearchController from "../controllers/search"
import getToken from "../controllers/token";
import { SearchQueryValidator } from "../util/validators/queryValidator";

const router = express.Router();

//router.get("/search", SearchQueryValidator, SearchController.search);
router.get("/token", cacheToken, getToken);

export default router;