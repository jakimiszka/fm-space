import styles from './Pages.module.scss';

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
              {/* <h1>03 SPACE LAUNCH 101</h1> */}
              <div className={styles['technology--content']}>
                <ul>
                    {
                        data.map(tech => (
                            <li key={tech.name} onClick={() => { /* setCurrentTechnology(tech);*/}}>{tech.name.toUpperCase()}</li>
                        ))
                    }
                </ul>
                <div className={styles['technology--content__info']}>
                    <h2>{data[0].name.toUpperCase()}</h2>
                    <p>
                        {data[0].description}
                    </p>
                </div>
           </div>
           <div className={styles['technology--imageWrapper']}>
                <img src={data[0].images.portrait} alt="Technology" />
           </div>   
        </div>
    );
}