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

    const [currentImage, setCurrentImage] = useState<string>(moonImage);
    console.log(data);  

    return (
        <div className={styles.destination}>
           {/* <h1>01 PICK YOUR DESTINATION</h1> */}
           <div className={styles['destination--content']}>
                <ul>
                    <li onClick={() => setCurrentImage(moonImage)}>MOON</li>
                    <li onClick={() => setCurrentImage(marsImage)}>MARS</li>
                    <li onClick={() => setCurrentImage(europaImage)}>EUROPA</li>
                    <li onClick={() => setCurrentImage(titanImage)}>TITAN</li>
                </ul>
                <div className={styles['destination--content__info']}>
                    <h2>MOON</h2>
                    <p>
                        See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                        regain perspective and come back refreshed. While you’re there, take in some history 
                        by visiting the Luna 2 and Apollo 11 landing sites.
                    </p>
                    <div className={styles['destination--content__stats']}>
                        <div>
                            <h3>AVG. DISTANCE</h3>
                            <p>384,400 KM</p>
                        </div>
                        <div>
                            <h3>EST. TRAVEL TIME</h3>
                            <p>3 DAYS</p>
                        </div>
                    </div>
                </div>
           </div>
           <div className={styles['destination--imageWrapper']}>
                <img src={currentImage} alt="Destination" />
           </div>
        </div>
    );
}