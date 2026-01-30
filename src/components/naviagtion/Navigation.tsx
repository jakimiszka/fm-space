import { Link, useLocation } from 'react-router';
import styles from './Navigation.module.scss';
import logo from '../../assets/shared/logo.svg';
import mobileMenuIcon from '../../assets/shared/icon-hamburger.svg';
import closeMenuIcon from '../../assets/shared/icon-close.svg';
import { useState, useEffect } from 'react';

interface NavigationProps {
    navItems?: string[];
    onRouteChange?: (path: string) => void;
}

export const Navigation = (props: NavigationProps) => {
    const location = useLocation();
    const [lastActive, setLastActive] = useState<string | null>(null);
    const [currentActive, setCurrentActive] = useState<string>('/');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    useEffect(() => {
        setLastActive(currentActive);
        setCurrentActive(location.pathname);
    }, [location.pathname]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 620 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobileMenuOpen]);

    const getItemPath = (item: string) => {
        return item === 'HOME' ? '/' : `/${item.toLowerCase()}`;
    };

    const getItemClass = (item: string) => {
        const path = getItemPath(item);
        const baseClass = styles['navigation--menu__item'];
        
        if (path === currentActive || (path === '/' && currentActive === '/')) {
            return `${baseClass} ${styles.active}`;
        }
        if (path === lastActive) {
            return `${baseClass} ${styles.lastActive}`;
        }
        return baseClass;
    };

    return (
        <nav className={styles.navigation}>
            <div className={styles['navigation--logo']}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles['navigation--lane']}>
                <hr />
            </div>
            <div className={styles[isMobileMenuOpen ? 'mobileMenuActive' : 'navigation--menu']}>
                {props.navItems?.map((item, index) => (
                    <Link to={getItemPath(item)} key={index} onClick={() => {
                        props.onRouteChange && props.onRouteChange(getItemPath(item));
                        if (isMobileMenuOpen) {
                            setIsMobileMenuOpen(false);
                        }
                    }}>
                        <div className={getItemClass(item)}>
                            <span>{`0${index}`}</span><p>{` ${item}`}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className={styles['navigation--mobileMenu']}>
                <img src={isMobileMenuOpen ? closeMenuIcon : mobileMenuIcon} alt="menu" onClick={toggleMobileMenu} />
            </div>
        </nav>
    );
}