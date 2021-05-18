import { FC } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/layout.module.scss';

const Layout: FC = ({ children }) => (
    <div className={styles.container}>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </div>
)

export default Layout
