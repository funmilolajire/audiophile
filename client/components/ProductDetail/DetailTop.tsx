import { FC, useState, useEffect } from 'react';
import styles from './styles/detailtop.module.scss'
import { useRouter } from 'next/router';

const DetailTop: FC<DetailTop> = ({ ...props }) => {
    console.log({ ...props })
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
    return (
        <div className={styles.container}>
            <button onClick={router.back}>Go Back</button>
            <div className={styles.containerinner}>
                <picture>
                    <source media="(max-width: 590px)" srcSet={props.image.mobile} />
                    <source media="(max-width: 900px)" srcSet={props.image.tablet} />
                    <img src={props.image.desktop} alt="category-product" />
                </picture>
                <section>
                    {props.new && <span>new product</span>}
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                    <h4>$ {props.price}</h4>
                    <div>
                        <div className={styles.numberbox}>
                            <button onClick={decrement}>-</button>
                            <input onChange={changeAmount} type="text" value={amount} />
                            <button onClick={increment}>+</button>
                        </div>
                        <button className={styles.addtocart}>Add to cart</button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default DetailTop
