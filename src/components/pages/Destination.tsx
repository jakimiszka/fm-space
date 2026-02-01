import styles from './Pages.module.scss';
import moonImage from '../../assets/destination/image-moon.png';
import europaImage from '../../assets/destination/image-europa.png';
import marsImage from '../../assets/destination/image-mars.png';
import titanImage from '../../assets/destination/image-titan.png';
import { useState } from 'react';

interface DestinationProps {
    data: Array<{
        name: string;
        images: {
            png: string;
            webp: string;
        };
        description: string;
        distance: string;
        travel: string;
    }>;
}

export const Destination = ({ data }: DestinationProps) => {

    const imageMap: { [key: string]: string } = {
        'Moon': moonImage,
        'Mars': marsImage,
        'Europa': europaImage,
        'Titan': titanImage
    };
    const [currentPlanet, setCurrentPlanet] = useState<{
        name: string;
        images: {
            png: string;
            webp: string;
        };
        description: string;
        distance: string;
        travel: string;
    }>( data[0] );

    return (
        <div className={styles.destination}>
           {/* <h1>01 PICK YOUR DESTINATION</h1> */}
           <div className={styles['destination--content']}>
                <ul>
                    {
                        data.map(planet => (
                            <li key={planet.name} onClick={() => { setCurrentPlanet(planet);}}>{planet.name.toUpperCase()}</li>
                        ))
                    }
                </ul>
                <div className={styles['destination--content__info']}>
                    <h2>{currentPlanet.name.toUpperCase()}</h2>
                    <p>
                        {currentPlanet.description}
                    </p>
                    <div className={styles['destination--content__stats']}>
                        <div>
                            <h3>AVG. DISTANCE</h3>
                            <p>{currentPlanet.distance}</p>
                        </div>
                        <div>
                            <h3>EST. TRAVEL TIME</h3>
                            <p>{currentPlanet.travel}</p>
                        </div>
                    </div>
                </div>
           </div>
           <div className={styles['destination--imageWrapper']}>
                <img src={imageMap[currentPlanet.name]} alt="Destination" />
           </div>
        </div>
    );
}