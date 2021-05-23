import styles from './styles/products.module.scss';
import { FC } from 'react';
import Product from './Product';
import { findIndex } from 'lodash';

const Products: FC<CategoryProducts> = ({ categoryProducts }) => {
    const findProductIndex = (array: CategoryProduct[], a: CategoryProduct) => {
        return findIndex(array, (item: CategoryProduct) => item === a)
    }
    return (
        <div className={styles.container}>
            {
                categoryProducts.sort((a, b) =>
                    findProductIndex(categoryProducts, b) - findProductIndex(categoryProducts, a))
                    .map((categoryProduct: CategoryProduct, index) =>
                        <Product key={categoryProduct.id} {...categoryProduct} index={index} />
                    )}
        </div>
    )
}

export default Products
