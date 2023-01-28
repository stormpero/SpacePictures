import axios from "axios";
import { NASA_API_KEY } from "./apiKey";

export const getSpacePictureByDay = (dateMoment) => {
    const dataString = dateMoment.format("YYYY-MM-DD");
    return axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${dataString}`
    );
};
