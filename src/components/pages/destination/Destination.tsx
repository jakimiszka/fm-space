import styles from './Destination.module.scss';
import moonImage from '../../../assets/destination/image-moon.png';
import europaImage from '../../../assets/destination/image-europa.png';
import marsImage from '../../../assets/destination/image-mars.png';
import titanImage from '../../../assets/destination/image-titan.png';
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
                    <li onClick={() => { setCurrentPlanet(data[0]);}}>MOON</li>
                    <li onClick={() => { setCurrentPlanet(data[1]);}}>MARS</li>
                    <li onClick={() => { setCurrentPlanet(data[2]);}}>EUROPA</li>
                    <li onClick={() => { setCurrentPlanet(data[3]);}}>TITAN</li>
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