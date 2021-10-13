import Link from 'next/link'
import CartProduct from './CartProduct';
import styles from './styles/cart.module.scss';
import { FC, useRef, useState, useEffect } from 'react';
import { getCartItemsApi } from './apis/getcartitems.api';

const Cart: FC<SetShowCart> = ({ setShowCart }) => {
    const [cartItems, setCartItems] = useState<{ product: Product, order_quantity: number }[]>([])
    const [total,setTotal] = useState(0)
    const overlayRef = useRef(null)
    const closeCart = (e:any) => {
        if (e.target === overlayRef.current) {
            setShowCart(false)
        }
    }
    const removeAll = () => {
        localStorage.removeItem('cart')
    }
    useEffect(() => {
        const cart:{id:number,order_quantity:number}[] = JSON.parse(localStorage.getItem('cart') || '[]')
        const cartIds:number[] = cart.map(item=>item.id)
        const getCartItems = async() => {
            const res = await getCartItemsApi(cartIds)
            const items:Product[] = res?.status === 200 ? await res?.value : []
            const includeQuantity = items.length !== 0 ? items.map(item => {
                const order_quantity = cart.find(cartItem => cartItem.id === item.id)?.order_quantity
                return {
                    product:item,
                    order_quantity: order_quantity?order_quantity:0
                }
            }) : []
            const mapTotal = includeQuantity.map(item => item.product.price * item.order_quantity)
            const actualTotal = mapTotal.length!==0 ?mapTotal.reduce((a, b) => a + b):0
            setTotal(actualTotal)
            setCartItems(includeQuantity)
        }
        getCartItems()
    }, [JSON.parse(localStorage.getItem('cart') || '[]')])
    
    return (
        <div className={styles.container} ref={overlayRef} onClick={closeCart}>
            <div className={styles.cartbox}>
                <section className={styles.cartheader}>
                    <h3>Cart ({cartItems.length})</h3>
                    {cartItems.length!==0?<button onClick={removeAll}>Remove all</button>:null}
                </section>
                <div className={styles.cartbody}>
                   {cartItems && cartItems.map(item=> <CartProduct key={item.product.id} {...item} />)}
                </div>
                <div className={styles.cartfooter}>
                    {total?<section className={styles.total}>
                        <span>Total</span>
                        <h4>$ {total}</h4>
                    </section>:null}
                    <Link href={cartItems.length!==0?"/checkout":""}><button disabled={cartItems.length===0}>checkout</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Cart
