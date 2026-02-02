import styles from './Technology.module.scss';
import imageLaunchLandscape from '../../../assets/technology/image-launch-vehicle-landscape.jpg';
import imageLaunchPortrait from '../../../assets/technology/image-launch-vehicle-portrait.jpg';
import imageCapsuleLandscape from '../../../assets/technology/image-space-capsule-landscape.jpg';
import imageCapsulePortrait from '../../../assets/technology/image-space-capsule-portrait.jpg';
import imageSpaceportLandscape from '../../../assets/technology/image-spaceport-landscape.jpg';
import imageSpaceportPortrait from '../../../assets/technology/image-spaceport-portrait.jpg';

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
    return (
        <div className={styles.technology}>
            <div className={styles['technology--title']}>
                <h1><span>03</span> SPACE LAUNCH 101</h1>
            </div>
            <div className={styles['technology--content']}>
                <div className={styles['technology--content__imageWrapper']}>
                    <img 
                        className={styles['technology--content__imageWrapper--portrait']} 
                        src={imageLaunchPortrait} 
                        alt="Launch Vehicle Portrait" 
                    />
                </div>
                <div className={styles['technology--content__info']}>
                    <div className={styles['technology--content__info__details']}>
                        <h2>THE TERMINOLOGY...</h2>
                        <h3>{data[0].name.toUpperCase()}</h3>
                        <p>{data[0].description}</p>
                    </div>
                    <div className={styles['technology--content__info__buttons']}>
                        {data.map((tech, index) => (
                            <button key={index}>{index + 1}</button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}