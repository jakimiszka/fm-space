import { Routes, Route, Link } from 'react-router-dom';
import { Navigation } from '../naviagtion';
import styles from './Container.module.scss';
import { Home, Destination, Crew, Technology } from '../pages';

export const Container = () => {    

    return (
        <div className={styles.container}>
            <Navigation navItems={['HOME', 'DESTINATION', 'CREW', 'TECHNOLOGY']}/>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/crew" element={<Crew />} />
                <Route path="/technology" element={<Technology />} />
            </Routes>
        </div>
    );
}