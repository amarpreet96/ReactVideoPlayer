import axios from 'axios';
const KEY = 'AIzaSyAFDu_z3r6Z72X1oxUs3R9AYC3VOiUG_O8';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }
});