import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h1>Muhammad Flaifel</h1>
        <nav className={styles.nav}>
          <a href="#hero-title">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          {/* <a href="#education">Education</a> */}
        </nav>
        <p>© 2025 Muhammad Flaifel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;