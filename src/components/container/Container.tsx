import { Routes, Route } from 'react-router-dom';
import { Navigation, Title } from '../naviagtion';
import styles from './Container.module.scss';
import { Home, Destination, Crew, Technology, GenericGallery } from '../pages';
import { useState } from 'react';

export const Container = () => {
    const [backgroundClass, setBackgroundClass] = useState<string>(styles['container--home']);
    const data = require('../../../data.json');
    console.log(data);

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
            <Title />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/destination" element={<Destination data={data.destinations} />} />
                <Route path="/crew" element={<Crew data={data.crew} />} /> */}
                <Route path="/destination" element={<GenericGallery<{
                    name: string;
                    images: { png: string; webp: string };
                    description: string;
                    distance: string;
                    travel: string;
                }> data={data.destinations} imageMap={{}} className="destination" 
                renderInfo={(planet) => (
                    <div className={styles['destination--content__info']}>
                        <h2>{planet.name.toUpperCase()}</h2>
                        <p>{planet.description}</p>
        
                        <div className={styles['destination--content__stats']}>
                            <div>
                                <h3>AVG. DISTANCE</h3>
                                <p>{planet.distance}</p>
                            </div>
                            <div>
                                <h3>EST. TRAVEL TIME</h3>
                                <p>{planet.travel}</p>
                            </div>
                        </div>
                    </div>)
                }/>} />
                <Route path="/crew" element={<GenericGallery<{
                    name: string;
                    images: { png: string; webp: string };
                    role: string;
                    bio: string;
                }> data={data.crew} imageMap={{}} className="crew" renderInfo={
                    (crewMember) => <div className={styles['crew--content__info']}>
                        <h2>{crewMember.role}</h2>
                        <h3>{crewMember.name}</h3>
                        <p>
                            {crewMember.bio}
                        </p>
                    </div>
                }/>} />
                <Route path="/technology" element={<Technology data={data.technology} />} />
            </Routes>
        </div>
    );
}