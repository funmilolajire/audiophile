import { useRouter } from 'next/router';
import FormWrapper from './FormWrapper';
import Summary from './Summary';
import styles from './styles/content.module.scss'

const Content = () => {
    const router = useRouter()
    return (
        <div className={styles.container}>
            <button onClick={router.back}>Go Back</button>
            <div className={styles.main}>
                <FormWrapper />
                <Summary />
            </div>
            </div>
    )
}

export default Content
