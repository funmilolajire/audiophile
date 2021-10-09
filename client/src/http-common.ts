import axios from "axios";

const cancelToken = axios.CancelToken
export const source = cancelToken.source()

export default axios.create({
    // baseURL: "https://audiophileapi.herokuapp.com/",
    baseURL: process.env.PRODUCTS_API,
    headers: {
        "Content-type": "application/json"
    },
    cancelToken: source.token
});