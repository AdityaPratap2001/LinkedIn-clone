import axios from 'axios';

const instance = axios.create(
    {
        // baseURL: "http://91d7ddfbae13.ngrok.io"
        // baseURL: "http://0d8c55b48a6d.ngrok.io"
        // baseURL: "http://445a2038d9d1.ngrok.io"
        baseURL: "http://d1a9102671d2.ngrok.io"
    }
);

export default instance;