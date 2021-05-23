import styles from './styles/gallery.module.scss'

const Gallery = () => {
    return (
        <div className={styles.container}>
            <picture className={styles.first}>
                <source media="(max-width: 590px)" srcSet="https://res.cloudinary.com/funmilolajire/image/upload/v1621238332/audiophile/products/product-xx99-mark-two-headphones/mobile/image-gallery-1_urgdzn.jpg" />
                <source media="(max-width: 900px)" srcSet="https://res.cloudinary.com/funmilolajire/image/upload/v1621238355/audiophile/products/product-xx99-mark-two-headphones/tablet/image-gallery-1_fc5fr2.jpg" />
                <img src="https://res.cloudinary.com/funmilolajire/image/upload/v1621238307/audiophile/products/product-xx99-mark-two-headphones/desktop/image-gallery-1_xrnktw.jpg" alt="gallery-first" />
            </picture>
            <picture className={styles.second}>
                <source media="(max-width: 590px)" srcSet="https://res.cloudinary.com/funmilolajire/image/upload/v1621238333/audiophile/products/product-xx99-mark-two-headphones/mobile/image-gallery-2_vjqbg0.jpg" />
                <source media="(max-width: 900px)" srcSet="https://res.cloudinary.com/funmilolajire/image/upload/v1621238356/audiophile/products/product-xx99-mark-two-headphones/tablet/image-gallery-2_aivdcl.jpg" />
                <img src="https://res.cloudinary.com/funmilolajire/image/upload/v1621238308/audiophile/products/product-xx99-mark-two-headphones/desktop/image-gallery-2_revuwv.jpg" alt="gallery-second" />
            </picture>
            <picture className={styles.third}>
                <source media="(max-width: 590px)" srcSet="https://res.cloudinary.com/funmilolajire/image/upload/v1621238334/audiophile/products/product-xx99-mark-two-headphones/mobile/image-gallery-3_uinjky.jpg" />
                <source media="(max-width: 900px)" srcSet="https://res.cloudinary.com/funmilolajire/image/upload/v1621238357/audiophile/products/product-xx99-mark-two-headphones/tablet/image-gallery-3_h6qnyx.jpg" />
                <img src="https://res.cloudinary.com/funmilolajire/image/upload/v1621238309/audiophile/products/product-xx99-mark-two-headphones/desktop/image-gallery-3_m3toqh.jpg" alt="gallery-third" />
            </picture>
        </div>
    )
}

export default Gallery
