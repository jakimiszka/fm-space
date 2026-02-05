import styles from './Crew.module.scss';
import imageMark from '../../../assets/crew/image-mark-shuttleworth.png';
import imageVictor from '../../../assets/crew/image-victor-glover.png';
import imageDouglas from '../../../assets/crew/image-douglas-hurley.png';
import imageAnousheh from '../../../assets/crew/image-anousheh-ansari.png';
import { useState } from 'react';

interface CrewProps {
    data: Array<{
        name: string;
        images: {
            png: string;
            webp: string;
        };
        role: string;
        bio: string;
    }>;
}

export const Crew = ({ data }: CrewProps) => {

    const imageMap: { [key: string]: string } = {
        'Mark Shuttleworth': imageMark,
        'Victor Glover': imageVictor,
        'Douglas Hurley': imageDouglas,
        'Anousheh Ansari': imageAnousheh
    };

    const [currentMember, setCurrentMember] = useState<{
        name: string;
        images: {
            png: string;
            webp: string;
        };
        role: string;
        bio: string;
    }>( data[0] );

    const onClickMember = (memberIndex: number) => {
        setCurrentMember(data[memberIndex]);
        console.log(imageMark);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.crew}>
                <div className={styles['crew--title']}>
                    <h1><span>02</span> MEET YOUR CREW</h1>
                </div>
                <div className={styles['crew--content']}>
                    <div className={styles['crew--content__info']}>
                        <div className={styles['crew--content__info__wrapper']}>
                            <h2>{currentMember.role.toUpperCase()}</h2>
                            <h3>{currentMember.name}</h3>
                            <p>{currentMember.bio}</p>
                        </div>
                        <div className={styles['crew--content__info__buttons']}>
                            {data.map((member, index) => (
                                <button key={index} onClick={() => onClickMember(index)}></button>
                            ))}
                        </div>
                    </div>
                    <div className={styles['crew--content__imageWrapper']}>
                        <img src={imageMap[currentMember.name]} alt={currentMember.name} />
                    </div>
                </div>
            </div>
        </div>
    );
}