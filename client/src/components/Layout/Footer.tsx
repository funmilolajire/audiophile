import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io'
import styles from './styles/footer.module.scss';

const Footer: FC = () => {
    return (
        <footer className={styles.container}>
            <div>
                <div className={styles.logoDiv}>
                    <Image src="/logo.svg" height="100%" width="100%" alt="logo" />
                </div>
                <nav>
                    <Link href="/"><span data-link="/">HOME</span></Link>
                    <Link href="/categories/headphones"><span data-link="/categories/headphones">HEADPHONES</span></Link>
                    <Link href="/categories/speakers"><span data-link="/categories/speakers">SPEAKERS</span></Link>
                    <Link href="/categories/earphones"><span data-link="/categories/earphones">EARPHONES</span></Link>
                </nav>
            </div>
            <div>
                <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                <div className={styles.iconsDiv}>
                    <span><IoLogoFacebook /></span>
                    <span><IoLogoTwitter /></span>
                    <span><IoLogoInstagram /></span>
                </div>
            </div>
            <small>Copyright 2021. All Rights Reserved</small>
        </footer>
    )
}

export default Footer