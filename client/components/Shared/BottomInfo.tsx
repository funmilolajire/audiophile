import { FC } from 'react';
import styles from './styles/bottomInfo.module.scss';

const BottomInfo: FC = () => {
    return (
        <div className={styles.container}>
            <section>
                <h3>Bringing you the <span>best</span> gear</h3>
                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </section>
            <picture>
                <source media="(max-width: 590px)" srcSet="https://res.cloudinary.com/funmilolajire/image/upload/q_100/v1621237154/audiophile/shared/mobile/image-best-gear_qmm0h9.jpg" />
                <source media="(max-width: 900px)" srcSet="https://res.cloudinary.com/funmilolajire/image/upload/q_100/v1621237252/audiophile/shared/tablet/image-best-gear_af6zbd.jpg" />
                <img src="https://res.cloudinary.com/funmilolajire/image/upload/q_100/v1621237198/audiophile/shared/desktop/image-best-gear_mfnumy.jpg" alt="bottomInfo" />
            </picture>
        </div>
    )
}

export default BottomInfo
