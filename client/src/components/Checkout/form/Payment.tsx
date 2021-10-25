import PaymentButtons from './PaymentButtons';
import styles from './styles/formsections.module.scss'
import TextInput from './TextInput';
import { useState } from 'react';
import { FormikProps } from 'formik';
import _ from 'lodash';

const Payment = ({ formik }: { formik: FormikProps<FormValues> }) => {
    const [method, setMethod] = useState('e-money')
    return (
        <div className={styles.container}>
            <h4>Payment Details</h4>
            <div className={styles.inputscontainer}>
                <div className={styles.double}>
                    <label htmlFor="paymentMethod">Payment Method</label>
                    <div className={styles.paymentmethod}>
                        {
                            ["e-Money", "Cash On Delivery"].map(type =>
                                <PaymentButtons formik={formik} key={type} type={type} setMethod={setMethod} active={method === _.kebabCase(type)} />
                            )
                        }
                    </div>
                </div>
                {
                    method === "e-money" &&
                    <div className={styles.double}>
                        <TextInput label="e-Money Number" id="e_money_number" name="e_money_number" type="text" placeholder="238521993" />
                        <TextInput label="e-Money PIN" id="e_money_pin" name="e_money_pin" type="text" placeholder="6891" />
                    </div>
                }
                {
                    method == "cash-on-delivery" &&
                    <div className={styles.payondelivery}>
                        <figure>
                            <img src="/delivery.png" alt="delivery" />
                        </figure>
                        <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Payment
