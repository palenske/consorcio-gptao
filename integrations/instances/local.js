import axios from "axios";
// import { logger } from "../../lib/logtail";

const instance = axios.create({
  baseURL: "/api/",
  headers: {},
});

export default instance;
