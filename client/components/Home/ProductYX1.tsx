import { FC } from 'react';
import styles from './styles/productyx1.module.scss';

const ProductYX1: FC = () => {
    return (
        <div className={styles.container}>
            <picture>
                <source media="(max-width: 590px)" srcSet="https://res.cloudinary.com/funmilolajire/image/upload/q_100/v1621237033/audiophile/home/mobile/image-earphones-yx1_fwwwat.jpg" />
                <source media="(max-width: 900px)" srcSet="https://res.cloudinary.com/funmilolajire/image/upload/q_100/v1621237069/audiophile/home/tablet/image-earphones-yx1_t6dhsz.jpg" />
                <img src="https://res.cloudinary.com/funmilolajire/image/upload/q_100/v1621236928/audiophile/home/desktop/image-earphones-yx1_t4lpd5.jpg" alt="product-zx7" />
            </picture>
            <section>
                <h3>YX1 earphones</h3>
                <button>See product</button>
            </section>
        </div>
    )
}

export default ProductYX1
