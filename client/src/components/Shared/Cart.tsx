import Link from 'next/link'
import CartProduct from './CartProduct';
import styles from './styles/cart.module.scss';

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cartbox}>
                <section className={styles.cartheader}>
                    <h3>Cart (3)</h3>
                    <button>Remove all</button>
                </section>
                <div className={styles.cartbody}>
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                </div>
                <div className={styles.cartfooter}>
                    <section className={styles.total}>
                        <span>Total</span>
                        <h4>$ 5,396</h4>
                    </section>
                    <Link href="/checkout"><button>checkout</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Cart
