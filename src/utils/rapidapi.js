import axios from "axios";

const apiKey = import.meta.env.VITE_YT_API_KEY;
const BASE_URL = "https://youtube138.p.rapidapi.com"
const options = {
	headers: {
		'x-rapidapi-key': apiKey,
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};

export const fetchData = async(url)=>{
    try {
        const {data} = await axios.get(`${BASE_URL}/${url}`,options);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}