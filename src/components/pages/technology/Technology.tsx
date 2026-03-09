import styles from './Technology.module.scss';
import imageLaunchLandscape from '../../../assets/technology/image-launch-vehicle-landscape.jpg';
import imageLaunchPortrait from '../../../assets/technology/image-launch-vehicle-portrait.jpg';
import imageCapsuleLandscape from '../../../assets/technology/image-space-capsule-landscape.jpg';
import imageCapsulePortrait from '../../../assets/technology/image-space-capsule-portrait.jpg';
import imageSpaceportLandscape from '../../../assets/technology/image-spaceport-landscape.jpg';
import imageSpaceportPortrait from '../../../assets/technology/image-spaceport-portrait.jpg';
import { useState } from 'react';

interface TechnologyProps {
    data: Array<{
        name: string;
        images: {
            portrait: string;
            landscape: string;
        };
        description: string;
    }>;
}

export const Technology = ({ data }: TechnologyProps) => {

    const imageMap: { [key: string]: { landscape: string; portrait: string } } = {
        'Launch vehicle': {
            landscape: imageLaunchLandscape,
            portrait: imageLaunchPortrait
        },
        'Spaceport': {
            landscape: imageSpaceportLandscape,
            portrait: imageSpaceportPortrait
        },
        'Space capsule': {
            landscape: imageCapsuleLandscape,
            portrait: imageCapsulePortrait
        }
    };

    const [currentTechnology, setCurrentTechnology] = useState<{
        name: string;
        images: {
            portrait: string;
            landscape: string;
        };
        description: string;
    }>(data[0]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.technology}>
                <div className={styles['technology--title']}>
                    <h1>03 SPACE LAUNCH 101</h1>
                </div>
                <div className={styles['technology--content']}>
                    <div className={styles['technology--content__imageWrapper']}>
                        <img
                            className={styles['technology--content__imageWrapper--landscape']}
                            src={imageMap[currentTechnology.name].landscape}
                            alt={`${currentTechnology.name} Landscape`}
                        />
                        <img
                            className={styles['technology--content__imageWrapper--portrait']}
                            src={imageMap[currentTechnology.name].portrait}
                            alt={`${currentTechnology.name} Portrait`}
                        />
                    </div>
                    <div className={styles['technology--content__info']}>
                        <div className={styles['technology--content__info__buttons']}>
                            {data.map((tech, index) => (
                                <button
                                    key={index}
                                    className={currentTechnology.name === tech.name ? styles.activeStep : ''}
                                    onClick={() => setCurrentTechnology(tech)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                        <div className={styles['technology--content__info__details']}>
                            <h2>THE TERMINOLOGY...</h2>
                            <h3>{currentTechnology.name.toUpperCase()}</h3>
                            <p>{currentTechnology.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}