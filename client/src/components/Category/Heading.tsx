import styles from './styles/heading.module.scss';
import { FC } from 'react';

const Heading: FC<Heading> = ({ category }) => {
    return (
        <div className={styles.container}>
            <h2>{category}</h2>
        </div>
    )
}

export default Heading
