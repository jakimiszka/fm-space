import styles from './Home.module.scss';

export const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles['home--content']}>
                <p className={styles['home--content__title']}>SO, YOU WANT TO TRAVEL TO</p>
                <h1>Space</h1>
                <p>
                    Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!
                </p>
            </div>
            <div className={styles['home--btnWrapper']}>
                <button>Explore</button>
            </div>
            
        </div>
    );
}   