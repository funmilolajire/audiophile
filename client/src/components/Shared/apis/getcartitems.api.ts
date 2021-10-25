import http from '../../../http-common'
import { AxiosRequestConfig } from 'axios';

export const getCartItemsApi = async (cartIds: string[]) => {
    const request: AxiosRequestConfig = {
        method: 'GET',
        url: "/products",
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        let response = await http({
            ...request
        }).catch(err => {
            if (err.response) {
                // client received an error response (5xx, 4xx)
                console.log(err.response)
            } else if (err.request) {
                // client never received a response, or request never left
                console.log(err.request)
            } else {
                // anything else
                console.log(err)
            }
        })

        if (response && response.status === 200) {
            const data: Product[] = response.data
            const cart = data.filter(item => item.id && cartIds.includes(item.id))
            return {
                value: cart,
                status: 200
            }
        }
    } catch (e) {
        console.log(e)
    }
}