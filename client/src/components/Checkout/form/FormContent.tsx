import { Form, Formik } from "formik"
import Billing from "./Billing"
import Payment from "./Payment"
import Shipping from "./Shipping"
import { initialValues } from './utils/forminitialvalues';
import { validationSchema } from './utils/formvalidationschema';

const FormContent = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                console.log(values)
                setSubmitting(false)
                // resetForm()
            }}
        >{(formik) =>
            <Form>
                <Billing />
                <Shipping />
                <Payment formik={formik} />
            </Form>}
        </Formik>
    )
}

export default FormContent
