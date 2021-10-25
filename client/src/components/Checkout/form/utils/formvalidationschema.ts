import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    name: Yup.string().required('name is required'),
    email: Yup.string().email('enter a valid email').required('email is required'),
    phone_number: Yup.string()
        .matches(/^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,7}$/,
            { message: "enter a valid phone number" })
        .required('phone number is required'),
    address: Yup.string().min(6).required('address is required'),
    zip_code: Yup.string().length(5).required('zip code is required'),
    city: Yup.string().min(3).required('city is required'),
    country: Yup.string().min(3).required('country is required'),
    payment_method: Yup.string().oneOf(['e-money', 'cash-on-delivery'], { values: 'invalid payment method' }).required('payment method is required'),
    e_money_number: Yup.string().when('payment_method', {
        is: (payment_method: string) => 'e-money',//just an e.g. you can return a function
        then: Yup.string().required('e-money number is required'),
        otherwise: Yup.string()
    }),
    e_money_pin: Yup.string().when('payment_method', {
        is: (payment_method: string) => 'e-money',//just an e.g. you can return a function
        then: Yup.string().required('e-money pin is required'),
        otherwise: Yup.string()
    })
}) 