import Link from 'next/link'
import CartProduct from './CartProduct';
import styles from './styles/cart.module.scss';
import { FC, useRef, useState, useEffect } from 'react';
import { getCartItemsApi } from './apis/getcartitems.api';
import { useRouter } from 'next/router';
import { useAppContext } from '../../contexts/context';

const Cart: FC<SetShowCart> = ({ setShowCart }) => {
    const router = useRouter()
    const [productsInCart, setProductsInCart] = useState<{ product: Product, order_quantity: number }[]>([])
    const [total, setTotal] = useState(0)
    const overlayRef = useRef(null)
    const closeCart = (e: any) => {
        if (e.target === overlayRef.current) {
            setShowCart(false)
        }
    }
    useEffect(() => {
        router.events.on('routeChangeStart', () => setShowCart(false))
        return () => {
            router.events.off('routeChangeStart', () => setShowCart(false))
        }
    })

    const { removeAllFromCart, cartItems } = useAppContext()
    useEffect(() => {
        const cartIds: string[] = cartItems.map(item => item.id)
        const getCartItems = async () => {
            const res = await getCartItemsApi(cartIds)
            const items: Product[] = res?.status === 200 ? await res?.value : []
            const includeQuantity = items.length !== 0 ? items.map(item => {
                const order_quantity = cartItems.find(cartItem => cartItem.id === item.id)?.order_quantity
                return {
                    product: item,
                    order_quantity: order_quantity ? order_quantity : 0
                }
            }) : []
            const mapTotal = includeQuantity.map(item => parseFloat(item.product.price.substring(1).split(',').join('')) * item.order_quantity)
            const actualTotal = mapTotal.length !== 0 ? mapTotal.reduce((a, b) => a + b) : 0
            setTotal(actualTotal)
            setProductsInCart(includeQuantity)
        }
        getCartItems()
    }, [cartItems])

    return (
        <div className={styles.container} ref={overlayRef} onClick={closeCart}>
            <div className={styles.cartbox}>
                <section className={styles.cartheader}>
                    <h3>Cart ({productsInCart.length})</h3>
                    {productsInCart.length !== 0 ? <button onClick={removeAllFromCart}>Remove all</button> : null}
                </section>
                <div className={styles.cartbody}>
                    {productsInCart && productsInCart.map(item => <CartProduct key={item.product.id} {...item} />)}
                </div>
                <div className={styles.cartfooter}>
                    {total ? <section className={styles.total}>
                        <span>Total</span>
                        <h4>$ {new Intl.NumberFormat('en-US').format(total)}</h4>
                    </section> : null}
                    <Link href={productsInCart.length !== 0 ? "/checkout" : ""}><button disabled={productsInCart.length === 0}>checkout</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Cart
