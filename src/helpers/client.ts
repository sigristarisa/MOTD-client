import axios from "axios";
const host: string = "http://localhost:4000";

const client = {
  get: (path: string) => {
    const url = `${host}${path}`;
    return axios.get(url);
  },
};

export default client;
