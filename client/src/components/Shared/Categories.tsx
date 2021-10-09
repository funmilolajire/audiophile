import { FC } from 'react';
import Category from './Category';
import { categories } from '../Home/utils/categories';
import styles from './styles/categories.module.scss';

const Categories: FC = () => {
    return (
        <div className={styles.container}>
            {categories.map((category, index) => <Category key={index} {...category} />)}
        </div>
    )
}

export default Categories
