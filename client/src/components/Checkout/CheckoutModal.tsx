import React from 'react'
import { BiCheck } from 'react-icons/bi'
import styles from './styles/checkoutmodal.module.scss'
import Link from 'next/link';
import { SetStateAction, Dispatch, useRef, useEffect } from 'react';
import { useAppContext } from '../../contexts/context';
import SummaryProduct from './SummaryProduct';

const CheckoutModal = ({ setShowModal, grandTotal, productsInCart }: { setShowModal: Dispatch<SetStateAction<boolean>>, grandTotal: number, productsInCart: { product: Product, order_quantity: number }[] }) => {
    const modalContainerRef = useRef(null)
    const closeModal = (e: any) => {
        if (e.target === modalContainerRef.current) {
            setShowModal(false)
        }
    }

    return (
        <div ref={modalContainerRef} onClick={closeModal} className={styles.container}>
            <div className={styles.innercontent}>
                <span className={styles.icon}><BiCheck /></span>
                <h2>Thank you for your order</h2>
                <p>You will receive an email confirmation shortly.</p>
                <div className={styles.items}>
                    <div className={styles.description}>
                        {
                            productsInCart && <SummaryProduct short={productsInCart[0].product.short ? productsInCart[0].product.short : productsInCart[0].product.name} price={productsInCart[0].product.price} image={productsInCart[0].product.image.desktop} quantity={productsInCart[0].order_quantity} />
                        }
                        {productsInCart && productsInCart.length > 1 && <p>and {productsInCart.length - 1} other item{(productsInCart.length - 1) > 1 ? '(s)' : ''}</p>}
                    </div>
                    <section className={styles.grandtotal}>
                        <span>Grand Total</span>
                        <h4>$ {new Intl.NumberFormat('en-US').format(grandTotal)}</h4>
                    </section>
                </div>
                <Link href="/"><button type="button">back to home</button></Link>
            </div>
        </div>
    )
}

export default CheckoutModal
