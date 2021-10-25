import axios from "axios";

const cancelToken = axios.CancelToken
export const source = cancelToken.source()

export default axios.create({
    baseURL: process.env.NEXT_PUBLIC_PRODUCTS_API,
    headers: {
        "Content-type": "application/json"
    },
    cancelToken: source.token
});