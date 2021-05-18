import { FC, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import styles from './styles/header.module.scss';

const Header: FC = () => {
    const navRef = useRef<HTMLElement>(null)
    const router = useRouter()
    const currentPath = router.pathname
    const getActivePage = () => {
        const activeNav = navRef.current?.dataset.link
        console.log(activeNav)
    }
    // useEffect(() => {
    //     getActivePage()
    // }, [currentPath])
    return (
        <header className={styles.container}>
            <div>
                <div className={styles.logoDiv}>
                    <Image src="/assets/shared/desktop/logo.svg" height="100%" width="100%" alt="logo" />
                </div>
                <nav ref={navRef}>
                    <Link href="/"><span data-link="/">HOME</span></Link>
                    <Link href="/categories/headphones"><span data-link="/categories/headphones">HEADPHONES</span></Link>
                    <Link href="/categories/speakers"><span data-link="/categories/speakers">SPEAKERS</span></Link>
                    <Link href="/categories/earphones"><span data-link="/categories/earphones">EARPHONES</span></Link>
                </nav>
                <span className={styles.cartIcon}><HiOutlineShoppingCart /></span>
            </div>
        </header>
    )
}

export default Header
