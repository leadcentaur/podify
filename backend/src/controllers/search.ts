import axios from "axios";
import { RequestHandler } from "express";
import createHttpError from "http-errors";
import getToken from "./token";
import { validationResult } from 'express-validator';

interface ImageObject {
    height: number,
    url: string,
    width: number,
}

interface QueryItem {
    name: string,
    iurl: string,
    id: string,
    type: string,
}

interface QueryResponse {
    available_markets?: [],
    copyrights?: [],
    description: string,
    explicit: boolean,
    id?: string,
    name: string,
    images: [ImageObject],
    type: string,
}

// export const search: RequestHandler = async (req, res, next) => {
//     try {
        
//         const searchQuery = req.query.query;
//         const queryResponse: QueryItem[] = []

//         const errors = validationResult(req);
//         if (!errors.isEmpty() || !searchQuery) {
//             throw createHttpError(404, "bad search query");
//         }

//         const testingToken = await getToken();
//         if (!testingToken) {
//             // this means we failed to get the token, no need to tell the user that.
//             throw createHttpError(404, "<Replace with error handling>");
//         }

//         const response = await axios.request({
//             url: `https://api.spotify.com/v1/search?q=${searchQuery}&type=show&market=ES`,
//             method: "GET",
//             headers: {
//                 "Authorization": "Bearer " + testingToken,
//                 "Accept": "application/json",
//                 "Content-Type": "application/json"
//             }        
//         })

//         const data = response.data.shows.items;
//         data.forEach((element: QueryResponse) => {
//             if (element.type == "show") {
//                 const item = {
//                     name: element.name,
//                     iurl: element.images[0].url,
//                     id: element.id,
//                     type: element.type
//                 } as QueryItem
//                 queryResponse.push(item);
//             }
//         });
        
//       if (!Object.keys(queryResponse).length) { 
//             return res.status(404).json("No results found."); } else {
//         return res.status(200).json(queryResponse);
//       }

//     } catch (error) {
//         next(error)
//     }
// }