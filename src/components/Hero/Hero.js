import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
    <header className={styles.component}>
        <h2 className={styles.title}>My travel list</h2>
        <img src='https://i.postimg.cc/fW5JKSPT/pexels-archie-binamira-672358.jpg' className={styles.image} />
    </header>
)


export default Hero;