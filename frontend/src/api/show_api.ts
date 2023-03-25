import { render } from "@testing-library/react";
import { rejects } from "assert";
import axios from "axios";
import getToken from "../../../backend/src/controllers/token";
import { QueryItem, QueryResponse } from "../interfaces/interfaces";

interface ShowInfo {
    podcast_id?: string,
}

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const getShows = async <Type extends ShowInfo>(podcast_id: Type) => {
    try {
        await timeout(3000);
    } catch (err) {
        console.log(err)
    }
    return podcast_id;
}