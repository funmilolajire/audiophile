interface TextInputProps {
    label: string;
    id: string;
    name: string;
    type: string;
    placeholder: string;
}

interface FormValues {
    name: string,
    email: string,
    phone_number: string,
    address: string,
    zip_code: string,
    city: string,
    country: string,
    payment_method: string,
    e_money_number: string,
    e_money_pin: string
}