import Link from "next/link"
import styles from './styles/product.module.scss';
import { FC } from 'react';
import _ from 'lodash';

const Product: FC<CategoryProduct & { index: number }> = ({ index, ...props }) => {
    const getStyle = () => {
        const flexDirection = index !== 0 && index % 2 !== 0 ? "row-reverse" : undefined
        return flexDirection
    }
    return (
        <div className={index !== 0 && index % 2 !== 0 ? `${styles.container} ${styles.reverse}` : styles.container}>
            {props.categoryThumbnails && <picture>
                <source media="(max-width: 650px)" srcSet={props.categoryThumbnails.mobile} />
                <source media="(max-width: 1100px)" srcSet={props.categoryThumbnails.tablet} />
                <img src={props.categoryThumbnails.desktop} alt="category-product" />
            </picture>}
            <section>
                {props.new && <span>new product</span>}
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <Link href={"/products/" + props.slug}><button>see product</button></Link>
            </section>
        </div>
    )
}

export default Product
