import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoChevronForward } from 'react-icons/io5'
import styles from './styles/category.module.scss';

const Category: FC<Category> = ({ image, name, link }) => {
    return (
        <section className={styles.container}>
            <Image src={image} height="auto" width="100%" alt={name} layout="responsive" objectFit="contain" />
            <h2>{name}</h2>
            <Link href={link}>
                <div>
                    <span className={styles.shop}>SHOP</span>
                    <span className={styles.chevronIcon}><IoChevronForward /></span>
                </div>
            </Link>
        </section>
    )
}

export default Category
