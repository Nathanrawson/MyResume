import axios from "axios";

const KEY = 'AIzaSyA3SaLslxnobLKFPPLaEe7mlIxFmq3T72U';

export default axios.create({
baseURL: 'https://mail.zoho.com/api/accounts/<accountId>/messages',
params: {
    part: 'snippet',
    type: 'video',
    maxResults: 20,
    key: KEY
    }
});

