import { useState } from 'react';
import styles from './Pages.module.scss';
import douglasImage from '../../assets/crew/image-douglas-hurley.png';
import markImage from '../../assets/crew/image-mark-shuttleworth.png';
import victorImage from '../../assets/crew/image-victor-glover.png';
import anoushehImage from '../../assets/crew/image-anousheh-ansari.png';

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
        'Douglas Hurley': douglasImage,
        'Mark Shuttleworth': markImage,
        'Victor Glover': victorImage,
        'Anousheh Ansari': anoushehImage
    };
    const [currentAstronaut, setCurrentAstronaut] = useState<{
        name: string;
        images: {
            png: string;
            webp: string;
        };
        role: string;
        bio: string;
    }>( data[0] );

    return (
        <div className={styles.crew}>
              {/* <h1>01 PICK YOUR DESTINATION</h1> */}
           <div className={styles['crew--content']}>
                <ul>
                    {data.map(member => (
                        <li key={member.name} onClick={() => { setCurrentAstronaut(member);}}>{member.name.toUpperCase()}</li>
                    ))
                    }
                </ul>
                <div className={styles['crew--content__info']}>
                    <h2>{currentAstronaut.name.toUpperCase()}</h2>
                    <h1>{currentAstronaut.role}</h1>
                    <p>
                        {currentAstronaut.bio}
                    </p>
                </div>
           </div>
           <div className={styles['crew--imageWrapper']}>
                <img src={imageMap[currentAstronaut.name]} alt="Destination" />
           </div>
        </div>
    );
}