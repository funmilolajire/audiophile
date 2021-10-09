import Link from 'next/link'
import styles from './styles/othersitem.module.scss'
import { FC } from 'react';

const OthersItem: FC<OtherItem> = ({ slug, name, image }) => {
    return (
        <div className={styles.container}>
            <picture>
                <source media="(max-width: 590px)" srcSet={image.mobile} />
                <source media="(max-width: 900px)" srcSet={image.tablet} />
                <img src={image.desktop} alt="other-product" />
            </picture>
            <section>
                <h5>{name}</h5>
                <Link href={"/products/" + slug}><button>see product</button></Link>
            </section>
        </div>
    )
}

export default OthersItem
