import styles from './styles/summary.module.scss'
import SummaryProduct from './SummaryProduct'
import { useState, useEffect } from 'react';
import { getCartItemsApi } from '../Shared/apis/getcartitems.api';
import { useAppContext } from '../../contexts/context';
import CheckoutModal from './CheckoutModal';

const Summary = () => {
    const [productsInCart, setProductsInCart] = useState<{ product: Product, order_quantity: number }[]>([])
    const [total, setTotal] = useState(0)
    const [shipping] = useState(50)
    const [vat, setVat] = useState(0)
    const [grandTotal, setGrandTotal] = useState(0)
    const [showModal, setShowModal] = useState(false)

    const { cartItems } = useAppContext()
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

    useEffect(() => {
        const calculatedVat = (20 * total) / 100
        setVat(calculatedVat)
    }, [total])

    useEffect(() => {
        const calculatedGrandTotal = total + shipping + vat
        setGrandTotal(calculatedGrandTotal)
    }, [total, shipping, vat])

    return (
        <section className={styles.container}>
            <h3>Summary</h3>
            <div className={styles.products}>
                {productsInCart && productsInCart.map((item) => <SummaryProduct key={item.product.id} short={item.product.short ? item.product.short : item.product.name} price={item.product.price} image={item.product.image.desktop} quantity={item.order_quantity} />)}
            </div>
            {cartItems.length !== 0 &&
                <div className={styles.costs}>
                    {[{ name: 'Total', value: total },
                    { name: 'Shipping', value: shipping },
                    { name: 'Vat (Included)', value: vat },
                    { name: 'Grand Total', value: grandTotal }].map((item, index) => item.value ?
                        <div key={index} className={item.name === 'Grand Total' ? `${styles.cost} ${styles.grandtotal}` : styles.cost}>
                            <span>{item.name}</span>
                            <h5>$ {new Intl.NumberFormat('en-US').format(item.value)}</h5>
                        </div>
                        : null
                    )}
                </div>
            }
            <button className={styles.pay} disabled={cartItems.length === 0} onClick={() => setShowModal(true)}>continue & pay</button>
            {showModal && <CheckoutModal setShowModal={setShowModal} grandTotal={grandTotal} productsInCart={productsInCart} />}
        </section>
    )
}

export default Summary
