import styles from './Pages.module.scss';

export const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles['home--content']}>
                <p>SO, YOU WANT TO TRAVEL TO</p>
                <h3>So, you want to travel to</h3>
                <h1>Space</h1>
                <p>
                    Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!
                </p>
            </div>
            <button>Explore</button>
        </div>
    );
}   