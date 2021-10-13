import styles from './styles/cartproduct.module.scss';
import { useState, useEffect, FC } from 'react';

const CartProduct:FC<{product:Product,order_quantity:number}> = ({...props}) => {
    const [amount, setAmount] = useState(props.order_quantity)
    const changeAmount = ({ target }: any) => {
        setAmount(Number((target.value.match(/^[0-9]+$/))))
    }
    const increment = () => {
        setAmount(prev => prev + 1)
    }

    const removeItem = () => {
        const currentCart: { id: number, order_quantity?: number }[] = JSON.parse(localStorage.getItem('cart') || '[]')
        const filterCart = currentCart.filter(item => item.id !== props.product.id)
        localStorage.setItem('cart', JSON.stringify(filterCart))
    }
    
    const decrement = () => {
        if (amount === 1) {
            removeItem()
        }else{
        setAmount(prev => prev !== 0 ? prev - 1 : 0)
    }}
    useEffect(() => {
        const currentCart: { id: number, order_quantity?: number }[] = JSON.parse(localStorage.getItem('cart') || '[]')
        if (props.product.id && currentCart.map(item => item.id).includes(props.product.id)) {
            const itemIndex = currentCart.findIndex(item => item.id === props.product.id)
            if (itemIndex !== -1) {
                currentCart[itemIndex] = { id: props.product.id, order_quantity: amount }
            }
        }
        localStorage.setItem('cart', JSON.stringify(currentCart))
    }, [amount])
    return (
        <div className={styles.container}>
            <picture>
                <img src={props.product.image.desktop} alt="product" />
            </picture>
            <section>
                <h4>{props.product.short}</h4>
                <span>$ {props.product.price}</span>
            </section>
            <div className={styles.numberbox}>
                <button onClick={decrement}>-</button>
                <input onChange={changeAmount} type="text" value={props.order_quantity?amount:0} />
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default CartProduct
