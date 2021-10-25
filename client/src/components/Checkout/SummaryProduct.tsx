import styles from './styles/summaryproduct.module.scss';

const SummaryProduct = ({ short, price, image, quantity }: { short: string, price: string, image: string, quantity: number }) => {
    return (
        <div className={styles.container}>
            <picture>
                <img src={image} alt={short} />
            </picture>
            <div className={styles.text}>
                <section>
                    <h5>{short}</h5>
                    <h6>{price}</h6>
                </section>
                <span>x{quantity}</span>
            </div>
        </div>
    )
}

export default SummaryProduct
