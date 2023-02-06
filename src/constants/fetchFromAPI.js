import axios from "axios";

const RAPID_API_KEY = "f78f2c7ad1mshc8f2794407dc272p12bc84jsn8ee38d8b3523";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    params: {
        maxResults: "50",
    },
    headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
