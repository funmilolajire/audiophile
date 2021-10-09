import { FC } from 'react';
import ProductZX9 from './ProductZX9';
import ProductZX7 from './ProductZX7';
import ProductYX1 from './ProductYX1';
import styles from './styles/products.module.scss'

const Products: FC = () => {
    return (
        <div className={styles.container}>
            <ProductZX9 />
            <ProductZX7 />
            <ProductYX1 />
        </div>
    )
}

export default Products
