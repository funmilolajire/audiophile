import { FC } from 'react';
import Link from 'next/link'
import styles from './styles/productzx9.module.scss';

const ProductZX9: FC = () => {
    return (
        <div className={styles.container}>
            <picture>
                <source media="(max-width: 590px)" srcSet="https://res.cloudinary.com/funmilolajire/image/upload/q_100/v1621237036/audiophile/home/mobile/image-speaker-zx9_pgvhsb.png" />
                <source media="(max-width: 900px)" srcSet="https://res.cloudinary.com/funmilolajire/image/upload/q_100/v1621237071/audiophile/home/tablet/image-speaker-zx9_nemkgl.png" />
                <img src="https://res.cloudinary.com/funmilolajire/image/upload/q_100/v1621236932/audiophile/home/desktop/image-speaker-zx9_gyykq0.png" alt="product-zx9" />
            </picture>
            <section>
                <h3>zx9 speaker</h3>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <Link href={"/products/" + 'zx9-speaker'}><button>SEE PRODUCT</button></Link>
            </section>
        </div>
    )
}

export default ProductZX9
