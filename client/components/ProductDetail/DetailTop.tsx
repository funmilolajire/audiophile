import { FC, useState } from 'react';
import styles from './styles/detailtop.module.scss'
import { useRouter } from 'next/router';

const DetailTop: FC = () => {
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
    return (
        <div className={styles.container}>
            <button onClick={router.back}>Go Back</button>
            <div className={styles.containerinner}>
                <picture>
                    <source media="(max-width: 590px)" srcSet="https://res.cloudinary.com/funmilolajire/image/upload/v1621238336/audiophile/products/product-xx99-mark-two-headphones/mobile/image-product_qltcog.jpg" />
                    <source media="(max-width: 900px)" srcSet="https://res.cloudinary.com/funmilolajire/image/upload/v1621238358/audiophile/products/product-xx99-mark-two-headphones/tablet/image-product_tlsltt.jpg" />
                    <img src="https://res.cloudinary.com/funmilolajire/image/upload/v1621238310/audiophile/products/product-xx99-mark-two-headphones/desktop/image-product_owbz45.jpg" alt="category-product" />
                </picture>
                <section>
                    <span>new product</span>
                    <h3>xx99 mark ii headphones</h3>
                    <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                    <h4>$ 2,999</h4>
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
