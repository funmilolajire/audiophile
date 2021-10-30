import styles from './styles/gallery.module.scss'
import { FC } from 'react';

const Gallery: FC<Gallery> = ({ gallery }) => {
    return (
        <div className={styles.container}>
            <picture className={styles.first}>
                <source media="(max-width: 650px)" srcSet={gallery.first.mobile} />
                <source media="(max-width: 1100px)" srcSet={gallery.first.tablet} />
                <img src={gallery.first.desktop} alt="gallery-first" />
            </picture>
            <picture className={styles.second}>
                <source media="(max-width: 650px)" srcSet={gallery.second.mobile} />
                <source media="(max-width: 1100px)" srcSet={gallery.second.tablet} />
                <img src={gallery.second.desktop} alt="gallery-second" />
            </picture>
            <picture className={styles.third}>
                <source media="(max-width: 650px)" srcSet={gallery.third.mobile} />
                <source media="(max-width: 1100px)" srcSet={gallery.third.tablet} />
                <img src={gallery.third.desktop} alt="gallery-third" />
            </picture>
        </div>
    )
}

export default Gallery
