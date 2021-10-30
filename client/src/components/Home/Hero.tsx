import { FC } from 'react';
import Link from 'next/link'
import styles from './styles/hero.module.scss';

const Hero: FC = () => {
    return (
        <div className={styles.container}>
            <picture>
                <source media="(max-width: 650px)" srcSet="https://res.cloudinary.com/funmilolajire/image/upload/q_100/v1621237034/audiophile/home/mobile/image-header_o1vwb8.jpg" />
                <source media="(max-width: 1100px)" srcSet="https://res.cloudinary.com/funmilolajire/image/upload/q_100/v1621237070/audiophile/home/tablet/image-header_zeea4m.jpg" />
                <img src="https://res.cloudinary.com/funmilolajire/image/upload/q_100/v1621236929/audiophile/home/desktop/image-hero_e8yogq.jpg" alt="hero bg" loading="lazy" />
            </picture>
            <section>
                <span>NEW PRODUCT</span>
                <h1>XX99 MARK II HEADPHONE</h1>
                <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <Link href={"/products/" + 'xx99-mark-two-headphones'}><button>SEE PRODUCT</button></Link>
            </section>
        </div>
    )
}

export default Hero
