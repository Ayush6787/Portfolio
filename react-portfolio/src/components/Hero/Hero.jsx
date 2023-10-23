// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Ayush</h1>
    <p className={styles.description}>
        I'm a full-stack developer with 2 years of experience using React and NodeJS. Reach out if you'd like to learn more!
         </p>
         <a href="mailto:ayushargonda6787@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/hero3.png")} alt="Ayush image" className={styles.heroImg}/>
        <div className={styles.topblur}/>
        <div className={styles.bottomblur}/>
  </section>;
}