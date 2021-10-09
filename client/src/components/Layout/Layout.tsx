import { FC } from 'react';
import Header from './Header';
import ScrollToTopButton from './ScrollToTopButton';
import Footer from './Footer';
import styles from './styles/layout.module.scss';
import Cart from '../Shared/Cart';

const Layout: FC = ({ children }) => (
    <div className={styles.container}>
        <Header />
        {/* <Cart /> */}
        <main>
            {children}
        </main>
        <ScrollToTopButton />
        <Footer />
    </div>
)

export default Layout