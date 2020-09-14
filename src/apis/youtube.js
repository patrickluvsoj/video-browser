import axios from 'axios';

const KEY = "AIzaSyDnPopnuauTBdP1DWymWg2QsX91Rj2HZQk";

export default axios.create(
    {
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            part: 'snippet',
            type: 'video',
            maxResult: 5,
            key: KEY
        }
    }
)