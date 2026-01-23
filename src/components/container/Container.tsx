import styles from './Container.module.scss';

export const Container = () => {
    console.log('styles:', styles);
    
    return (
        <div className={styles.container}>
            <h1>hello</h1>
        </div>
    );
}