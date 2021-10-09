import styles from './styles/cartproduct.module.scss';

const CartProduct = () => {
    return (
        <div className={styles.container}>
            <picture>
                <img src="https://res.cloudinary.com/funmilolajire/image/upload/v1621238310/audiophile/products/product-xx99-mark-two-headphones/desktop/image-product_owbz45.jpg" alt="product" />
            </picture>
            <section>
                <h4>XX97 MK II</h4>
                <span>$ 2,999</span>
            </section>
            <div className={styles.numberbox}>
                <button>-</button>
                <input type="text" value={1} />
                <button>+</button>
            </div>
        </div>
    )
}

export default CartProduct
