import styles from './Navigation.module.scss';

interface NavigationProps {
    type?: 'primary' | 'secondary';
    navItems?: string[];
}

export const Navigation = (props: NavigationProps) => {

    return (
        <nav className={styles.navigation}>
            <ul>
                {props.type == 'primary' && props.navItems?.map((item, index) => (
                    <li key={index}>
                        <span>0{index}</span>{item}
                    </li>
                ))}
                {props.type == 'secondary' && props.navItems?.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
}