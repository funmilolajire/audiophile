import styles from './styles/formsections.module.scss'
import TextInput from './TextInput'

const Billing = () => {
    return (
        <div className={styles.container}>
            <h4>Billing Details</h4>
            <div className={styles.inputscontainer}>
                <div className={styles.double}>
                    <TextInput label="Name" id="name" name="name" type="text" placeholder="Alexei Ward" />
                    <TextInput label="Email Address" id="email" name="email" type="email" placeholder="alexeiward@mail.com" />
                </div>
                <div className={styles.double}>
                    <TextInput label="Phone Number" id="phone_number" name="phone_number" type="tel" placeholder="+1 202-555-0136" />
                    <div />
                </div>
            </div>
        </div>
    )
}

export default Billing
