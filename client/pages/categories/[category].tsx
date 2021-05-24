import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import _ from 'lodash';
import Meta from '../../components/Layout/Meta';
import Main from '../../components/Category/Main';
import { GetStaticProps, GetStaticPaths } from 'next';

const category: FC<CategoryProducts> = ({ categoryProducts }) => {
    const [products, setProducts] = useState<CategoryProduct[]>([])
    const router = useRouter()
    const category = router.query.category
    console.log(categoryProducts.map(product => product.categoryThumbnails))
    const metaOptions = {
        title: "Category - " + _.capitalize("" + category),
        keywords: "music, audiophile,category, frontendmentor, funmilolajire, ecommerce, " + category,
        description: "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week."
    }
    useEffect(() => {
        setProducts(categoryProducts)
    }, [categoryProducts])
    return (
        <>
            <Meta {...metaOptions} />
            <Main category={"" + category} categoryProducts={products} />
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const category = context.params?.category
    const res = await fetch(process.env.PRODUCTS_API + "")
    let products: Product[] = await res.json()
    const categoryProducts = products.filter((product) => product.category === category)
    return {
        props: {
            categoryProducts: categoryProducts.map(product => ({
                id: product.id,
                name: product.name,
                new: product.new,
                categoryThumbnails: product.categoryThumbnails,
                description: product.description,
                slug: product.slug
            }))
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(process.env.PRODUCTS_API + "")
    const products: Product[] = await res.json()
    const categories = products.map((product) => ({ params: { category: product.category } }))
    const paths = [...categories]
    return {
        paths,
        fallback: false
    }
}

export default category