// eslint-disable-next-line no-unused-vars
import React from 'react';

import styles from "./About.module.css"
import { getImageUrl } from '../../utils';

export const About = () => {
  return <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
      <img src={getImageUrl("about/itsme2.png")} alt="My image" className={styles.aboutImage}/>
    <ul className={styles.aboutItems}>
    <li className={styles.aboutItem}>
      <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
    <div className={styles.aboutItemText}>
      <h3>Frontend Developer</h3>
      <p>
        I'm a frontend developer with experience in building responsive 
        and optimised sites
      </p>
    </div>
    </li>
    <li className={styles.aboutItem}>
      <img src={getImageUrl("about/serverIcon.png")} alt="server Icon" />
    <div className={styles.aboutItemText}>
      <h3>Backend Developer</h3>
      <p>
        I have experience in developing fast and optimised backend systems
        and APIs
      </p>
    </div>
    </li>
    <li className={styles.aboutItem}>
      <img src={getImageUrl("about/uiIcon.png")} alt="Ui Icon" />
    <div className={styles.aboutItemText}>
      <h3>Python Developer</h3>
      <p>
        I am a python developer with experience of 2 years in developing responsive 
        games and ML projects using python
      </p>
    </div>
    </li>
    </ul>
    </div>
    </section>
}
