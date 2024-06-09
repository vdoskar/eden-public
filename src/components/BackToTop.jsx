import React, { useState, useEffect } from 'react';
import translations from '../translations/components.json';
const lang = localStorage.getItem('lang') || 'cz';

function ScrollButton() {
    const [visible, setVisible] = useState(false);
    const distance = 450;

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > distance) {
            setVisible(true);
        } else if (scrolled <= distance) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    const styles = {
        display: visible ? 'inline' : 'none',
        backgroundColor: 'var(--c-orange)',
        outline: 'none',
        position: 'fixed',
        bottom: '5%',
        right: '5%',
        border: 'none',
        borderRadius: '0px',
        lineHeight: "1.5rem",
        fontSize: '1.05rem',
        boxShadow: 'var(--bs-classic)',
        transition: 'all 0.25s ease-in-out',
        cursor: 'pointer',
        color: 'var(--c-white)',
        zIndex: "150",
    };

    return (
        <div>
            <button onClick={scrollToTop} style={styles} className='btn-primary' id="back-to-top-button">
                {translations[lang].backToTop}
            </button>
        </div>
    );
}

export default ScrollButton