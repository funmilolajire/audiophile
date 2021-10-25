import styles from './styles/formsections.module.scss'
import TextInput from './TextInput';

const Shipping = () => {
    return (
        <div className={`${styles.container} ${styles.shipping}`}>
            <h4>Shipping Info</h4>
            <div className={styles.inputscontainer}>
                <TextInput label="Address" id="address" name="address" type="text" placeholder="1137 Williams Avenue" />
                <div className={styles.double}>
                    <TextInput label="Zip Code" id="zip_code" name="zip_code" type="text" placeholder="10010" />
                    <TextInput label="City" id="city" name="city" type="text" placeholder="New York" />
                </div>
                <div className={styles.double}>
                    <TextInput label="Country" id="country" name="country" type="text" placeholder="United States" />
                    <div />
                </div>
            </div>
        </div>
    )
}

export default Shipping
