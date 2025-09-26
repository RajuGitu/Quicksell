import React from 'react';
import styles from './Header.module.css';

const Header = ({
    title = "DoubleTick",
    logoSrc = "/media/Doubletick Logo.png",
    logoAlt = "DoubleTick Logo",
    onMenuClick,
    showMenu = true,
    className = ""
}) => {
    const handleMenuClick = () => {
        if (onMenuClick) {
            onMenuClick();
        }
    };

    return (
        <div className={`${styles.header} ${className}`}>
            <h1 className={styles.title}>
                <img
                    src={logoSrc}
                    alt={logoAlt}
                    className={styles.logo}
                />
                {title}
            </h1>
            {showMenu && (
                <button
                    className={styles.menuButton}
                    onClick={handleMenuClick}
                    aria-label="Open menu"
                >
                    ⋯
                </button>
            )}
        </div>
    );
};

export default Header;