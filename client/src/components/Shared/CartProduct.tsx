import styles from './styles/cartproduct.module.scss';
import { useState, useEffect, FC } from 'react';
import { useAppContext } from '../../contexts/context';

const CartProduct: FC<{ product: Product, order_quantity: number }> = ({ ...props }) => {
    const [amount, setAmount] = useState(props.order_quantity)

    const changeAmount = ({ target }: any) => {
        setAmount(Number((target.value.match(/^[0-9]+$/))))
    }

    const increment = () => {
        setAmount(prev => prev + 1)
    }

    const { removeItemFromCart, cartItems, changeItemQuantity } = useAppContext()

    const decrement = () => {
        if (amount === 1) {
            props.product.id && removeItemFromCart(props.product.id)
        } else {
            setAmount(prev => prev !== 0 ? prev - 1 : 0)
        }
    }

    useEffect(() => {
        changeItemQuantity(amount, props.product.id)
    }, [amount])

    return (
        <div className={styles.container}>
            <picture>
                <img src={props.product.image.desktop} alt="product" />
            </picture>
            <section>
                <h4>{props.product.short}</h4>
                <span>{props.product.price}</span>
            </section>
            <div className={styles.numberbox}>
                <button onClick={decrement}>-</button>
                <input onChange={changeAmount} type="text" value={props.order_quantity ? amount : 0} />
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default CartProduct
