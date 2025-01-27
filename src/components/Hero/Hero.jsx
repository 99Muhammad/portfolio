
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  const cvUrl = "/assets/MyCV/Muhammad Flaifel_Full-Stack.pdf";

  return (
    <section className={styles.container} aria-labelledby="hero-title">
      <div className={styles.content}>
        <h1 id="hero-title" className={styles.title}>
          Hi, I'm<br/> Muhammad Flaifel
        </h1>
        <h2 className={styles.subtitle}>I'm a Full-Stack Developer</h2>
        <p className={styles.description}>
        I am a motivated and versatile individual, 
        always eager to take on new challenges. 
        With a passion for learning I am dedicated to delivering high-quality results. 
        With a positive attitude and a growth mindset,
         I am ready to make a meaningful contribution and achieve great things.
        </p>
        <a
          href={cvUrl}
          download="Muhammad Flaifel_Full-Stack.pdf"
          className={styles.contactBtn}
          aria-label="Download my resume"
        >
          Download Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/MyImage.png")}
        alt="Muhammad Flaifel - Full Stack Developer"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};