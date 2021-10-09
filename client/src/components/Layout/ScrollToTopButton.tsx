import { useEffect, useCallback, useState, FC } from 'react';
import { IoChevronUpCircleSharp } from 'react-icons/io5';
import styles from './styles/scrollToTopButton.module.scss';

const ScrollToTopButton: FC = () => {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = useCallback(() => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    }, [showScroll, setShowScroll]);

    const buttonStyle = {
        display: showScroll ? 'flex' : 'none',
    }

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
        return () => {
            window.removeEventListener('scroll', checkScrollTop)
        }
    }, [checkScrollTop])

    return (
        <span className={styles.container} title="scroll to top" aria-label="scroll to top">
            <IoChevronUpCircleSharp className={styles.scrollToTopButton} role="button" style={buttonStyle} onClick={scrollTop} />
        </span>
    )
}

export default ScrollToTopButton