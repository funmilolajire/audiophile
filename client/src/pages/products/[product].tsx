import { useRouter } from "next/router"
import Meta from "../../components/Meta/Meta"
import Main from "../../components/ProductDetail/Main"
import _ from 'lodash';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';

const product: FC<Product> = ({ ...product }) => {
    const router = useRouter()
    const productSlug = router.query.product
    const metaOptions = {
        title: "Product - " + _.upperCase("" + productSlug),
        keywords: "music, audiophile,product, frontendmentor, funmilolajire, ecommerce, " + productSlug,
        description: "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week."
    }
    return (
        <>
            <Meta {...metaOptions} />
            <Main {...product} />
        </>
    )
}


export const getStaticProps: GetStaticProps = async (context) => {
    const productSlug = context.params?.product
    const res = await fetch(process.env.PRODUCTS_API + "/products")
    let products: Product[] = await res.json()
    const product = await products.filter((product) => product.slug === productSlug)[0]
    return {
        props: {
            ...product
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(process.env.PRODUCTS_API + "/products")
    const products: Product[] = await res.json()
    const paths = await products.map((product) => ({ params: { product: product.slug } }))
    return {
        paths,
        fallback: false
    }
}

export default product
