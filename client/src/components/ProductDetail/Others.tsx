import { FC } from 'react'
import OthersItem from './OthersItem'
import styles from './styles/others.module.scss'

const Others: FC<Others> = ({ others }) => {
    return (
        <>
            {others && <div className={styles.container}>
                <h4>You may also like</h4>
                <div className={styles.items}>
                    {others.map((item, index) => <OthersItem key={index} {...item} />)}
                </div>
            </div>}
        </>
    )
}

export default Others
