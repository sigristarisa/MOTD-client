import axios from "axios";
const host = process.env.REACT_APP_API_URL;

const client = {
  get: (path: string) => {
    const url = `${host}${path}`;
    // const headers = {
    //   "Access-Control-Allow-Origin": `${host}`,
    //   "Content-Type": "application/json",
    // };
    return axios.get(url);
  },
};

export default client;
