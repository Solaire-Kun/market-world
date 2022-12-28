import axios from "axios";

export default axios.create({
    baseURL: 'https://market-world-api.vercel.app'
});