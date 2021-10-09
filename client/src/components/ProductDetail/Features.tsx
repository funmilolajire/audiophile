import styles from './styles/features.module.scss'
import { FC } from 'react';
import parse from 'html-react-parser';

const Features: FC<Features> = ({ features, includes }) => {
    return (
        <div className={styles.container}>
            <section className={styles.features}>
                <h4>Features</h4>
                <p>{parse(features.replace(/\n/gi, '<br/>'))}</p>
            </section>
            {includes && <section className={styles.boxcontents}>
                <h4>In the box</h4>
                <div>
                    {includes.map((item, index) => <div key={index} className={styles.item}>
                        <span className={styles.number}>{item.quantity}x</span>
                        <span className={styles.itemname}>{item.item}</span>
                    </div>)}
                </div>
            </section>}
        </div>
    )
}

export default Features
