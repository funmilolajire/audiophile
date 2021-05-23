import styles from './styles/features.module.scss'

const Features = () => {
    return (
        <div className={styles.container}>
            <section className={styles.features}>
                <h4>Features</h4>
                <p>Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.

                    The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
            </section>
            <section className={styles.boxcontents}>
                <h4>In the box</h4>
                <div>
                    <div className={styles.item}>
                        <span className={styles.number}>1x</span>
                        <span className={styles.itemname}>Headphone unit</span>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.number}>2x</span>
                        <span className={styles.itemname}>replacement earcups</span>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.number}>1x</span>
                        <span className={styles.itemname}>user manual</span>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.number}>1x</span>
                        <span className={styles.itemname}>3.5mm 5m audio cable</span>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.number}>1x</span>
                        <span className={styles.itemname}>travel bag</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features
