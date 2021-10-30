import Categories from '../Shared/Categories'
import styles from './styles/dropdownmenu.module.scss'
import { SetStateAction, Dispatch, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

const DropdownMenu = ({ setShowMenu }: { setShowMenu: Dispatch<SetStateAction<boolean>>; }) => {
    const overlayMenuRef = useRef(null)
    const closeMenu = (e: any) => {
        if (e.target === overlayMenuRef.current) {
            setShowMenu(false)
        }
    }
    const router = useRouter()
    useEffect(() => {
        router.events.on('routeChangeStart', () => setShowMenu(false))
        return () => {
            router.events.off('routeChangeStart', () => setShowMenu(false))
        }
    })
    return (
        <div ref={overlayMenuRef} onClick={closeMenu} className={styles.container}>
            <div className={styles.menu}>
                <Categories />
            </div>
        </div>
    )
}

export default DropdownMenu
