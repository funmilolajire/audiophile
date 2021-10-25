import FormContent from './form/FormContent'
import styles from './styles/formwrapper.module.scss'

const FormWrapper = () => {
    return (
        <div className={styles.container}>
            <h2>Checkout</h2>
            <FormContent />
        </div>
    )
}

export default FormWrapper
