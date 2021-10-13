import { FC, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import styles from './styles/header.module.scss';

const Header: FC<SetShowCart> = ({setShowCart}) => {
    const navRef = useRef<HTMLElement>(null)
    const router = useRouter()
    return (
        <header className={styles.container}>
            <div>
                <div className={styles.logoDiv}>
                    <Image src="/logo.svg" height="100%" width="100%" alt="logo" />
                </div>
                <nav ref={navRef}>
                    <Link href="/"><span className={router.asPath == "/" ? styles.active : ''} data-link="/">HOME</span></Link>
                    <Link href="/categories/headphones"><span className={router.asPath == "/categories/headphones" ? styles.active : ''} data-link="/categories/headphones">HEADPHONES</span></Link>
                    <Link href="/categories/speakers"><span className={router.asPath == "/categories/speakers" ? styles.active : ''} data-link="/categories/speakers">SPEAKERS</span></Link>
                    <Link href="/categories/earphones"><span className={router.asPath == "/categories/earphones" ? styles.active : ''} data-link="/categories/earphones">EARPHONES</span></Link>
                </nav>
                <span className={styles.cartIcon} onClick={()=>setShowCart((prev:boolean)=>!prev)}><HiOutlineShoppingCart /></span>
            </div>
        </header>
    )
}

export default Header
