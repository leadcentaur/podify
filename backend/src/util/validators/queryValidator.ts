import { check } from "express-validator";
export const SearchQueryValidator = check('query').isAlpha('en-US', {ignore: ' '}).escape();