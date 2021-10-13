import { FC, useState } from 'react';
import Header from './Header';
import ScrollToTopButton from './ScrollToTopButton';
import Footer from './Footer';
import styles from './styles/layout.module.scss';
import Cart from '../Shared/Cart';

const Layout: FC = ({ children }) => {
    const [showCart,setShowCart]= useState(false)
    return (
    <div className={styles.container}>
        <Header setShowCart={setShowCart} />
        {showCart&& <Cart setShowCart={setShowCart} />}
        <main>
            {children}
        </main>
        <ScrollToTopButton />
        <Footer />
    </div>
)}

export default Layout
