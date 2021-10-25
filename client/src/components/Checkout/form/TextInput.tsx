import { useField } from 'formik';
import { FC } from 'react';
import styles from './styles/textinput.module.scss';

const TextInput: FC<TextInputProps> = ({ label, children, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={styles.container}>
            {label && <label className={meta.touched && meta.error ? styles.error : ''} htmlFor={props.id || props.name}>{label}</label>}
            <input className={
                meta.touched && meta.error ?
                    `${styles.input} ${styles.error}`
                    : styles.input
            }
                {...field}
                {...props}
            />
            {meta.touched && meta.error && <div className={styles.error}>
                {meta.error}
            </div>}
        </div>
    );
};

export default TextInput