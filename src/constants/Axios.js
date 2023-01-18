import Axios from "axios";
import { URL } from "./Constants";

const instance = Axios.create({
    baseURL: URL
});

export default instance;