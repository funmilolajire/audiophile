import styles from './styles/paymentbuttons.module.scss'
import { Dispatch, SetStateAction } from 'react';
import _ from 'lodash';
import { FormikProps } from 'formik';

const PaymentButtons = ({ type, setMethod, active, formik }: { type: string, active: boolean, setMethod: Dispatch<SetStateAction<string>>, formik: FormikProps<FormValues> }) => {
    const chooseMethod = () => {
        setMethod(_.kebabCase(type))
        formik.setFieldValue('payment_method', type)
    }
    return (
        <div className={active ? `${styles.container} ${styles.active}` : styles.container}
            onClick={chooseMethod}>
            <div></div>
            <span>{type}</span>
        </div>
    )
}

export default PaymentButtons
