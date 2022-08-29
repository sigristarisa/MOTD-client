import axios from "axios";
const host = process.env.REACT_APP_API_URL;

const client = {
  get: (path: string) => {
    const url = `${host}${path}`;
    return axios.get(url);
  },
};

export default client;
