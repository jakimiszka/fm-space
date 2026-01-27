import { Navigation } from '../naviagtion';
import styles from './Container.module.scss';

export const Container = () => {    

    return (
        <div className={styles.container}>
            <Navigation type="primary" navItems={['HOME', 'DESTINATION', 'CREW', 'TECHNOLOGY']}/>
            <Navigation type="secondary" navItems={['MOON', 'MARS', 'EUROPA', 'TITAN']}/>
        </div>
    );
}