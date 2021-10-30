import { FC, useState, useEffect } from 'react';
import styles from './styles/detailtop.module.scss'
import { useRouter } from 'next/router';
import { useAppContext } from '../../contexts/context';

const DetailTop: FC<DetailTop> = ({ ...props }) => {
    const router = useRouter()
    const [amount, setAmount] = useState(1)
    const changeAmount = ({ target }: any) => {
        setAmount(Number((target.value.match(/^[0-9]+$/))))
    }
    const increment = () => {
        setAmount(prev => prev + 1)
    }
    const decrement = () => {
        setAmount(prev => prev !== 0 ? prev - 1 : 0)
    }
    useEffect(() => {
        setAmount(1)
    }, [router.asPath])

    const [inCart, setInCart] = useState(false)
    const { cartItems, addToCart } = useAppContext()

    useEffect(() => {
        const currentCartIds: string[] = cartItems.map(item => item.id)
        if (props.id && currentCartIds.includes(props.id)) {
            setInCart(true)
        } else {
            setInCart(false)
        }
    }, [cartItems])

    return (
        <div className={styles.container}>
            <button onClick={router.back}>Go Back</button>
            <div className={styles.containerinner}>
                <picture>
                    <source media="(max-width: 650px)" srcSet={props.image.mobile} />
                    <source media="(max-width: 1100px)" srcSet={props.image.tablet} />
                    <img src={props.image.desktop} alt="category-product" />
                </picture>
                <section>
                    {props.new && <span>new product</span>}
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                    <h4>{props.price}</h4>
                    <div>
                        {!inCart ? <>
                            <div className={styles.numberbox}>
                                <button onClick={decrement}>-</button>
                                <input onChange={changeAmount} type="text" value={amount} />
                                <button onClick={increment}>+</button>
                            </div>
                            <button disabled={amount === 0} onClick={() => addToCart(amount, props.id)} className={styles.addtocart}>Add to cart</button>
                        </> :
                            <button disabled className={styles.addtocart}>Item in cart</button>
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}

export default DetailTop
