import { FC } from 'react';
import styles from './styles/productzx7.module.scss';

const ProductZX7: FC = () => {
    return (
        <div className={styles.container}>
            <picture>
                <source media="(max-width: 590px)" srcSet="https://res.cloudinary.com/funmilolajire/image/upload/q_100/v1621237035/audiophile/home/mobile/image-speaker-zx7_eglzyw.jpg" />
                <source media="(max-width: 900px)" srcSet="https://res.cloudinary.com/funmilolajire/image/upload/q_100/v1621237070/audiophile/home/tablet/image-speaker-zx7_qwdrcs.jpg" />
                <img src="https://res.cloudinary.com/funmilolajire/image/upload/q_100/v1621236930/audiophile/home/desktop/image-speaker-zx7_idggye.jpg" alt="product-zx7" />
            </picture>
            <section>
                <h3>ZX7 speaker</h3>
                <button>See product</button>
            </section>
        </div>
    )
}

export default ProductZX7
