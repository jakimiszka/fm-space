import { Routes, Route } from 'react-router-dom';
import { Navigation } from '../naviagtion';
import styles from './Container.module.scss';
import { Home, Destination, Crew, Technology } from '../pages';
import { useState } from 'react';

export const Container = () => {
    const [backgroundClass, setBackgroundClass] = useState<string>(styles['container--home']);
    const data = require('../../../data.json');

    const setBackground = (path: string) => {
        switch(path) {
            case '/':
                return styles['container--home'];
            case '/destination':
                return styles['container--destination'];
            case '/crew':
                return styles['container--crew'];
            case '/technology':
                return styles['container--technology'];
            default:
                return '';
        }
    }

    const onRouteChange = (path: string) => {
        setBackgroundClass(setBackground(path));
    }

    return (
        <div className={styles.container + ' ' + backgroundClass}>
            <Navigation navItems={['HOME', 'DESTINATION', 'CREW', 'TECHNOLOGY']} onRouteChange={onRouteChange} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destination" element={<Destination data={data.destinations} />} />
                <Route path="/crew" element={<Crew data={data.crew} />} />
                <Route path="/technology" element={<Technology data={data.technology} />} />
            </Routes>
        </div>
    );
}