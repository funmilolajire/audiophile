import { useRouter } from "next/router"
import Meta from "../../components/Layout/Meta"
import Main from "../../components/ProductDetail/Main"
import _ from 'lodash';

const product = () => {
    const router = useRouter()
    const product = router.query.product
    const metaOptions = {
        title: "Product - " + _.upperCase("" + product),
        keywords: "music, audiophile,product, frontendmentor, funmilolajire, ecommerce, " + product,
        description: "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week."
    }
    return (
        <>
            <Meta {...metaOptions} />
            <Main />
        </>
    )
}

export default product
