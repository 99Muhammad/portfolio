import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/gmail.png")} alt="Email icon" />
          <a href="mailto:muhammadibraheem99m@email.com">Email</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedin.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/muhammad-flaifle-6a620029a/">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/github-sign.png")} alt="Github icon" />
          <a href="https://github.com/99Muhammad">Github</a>
        </li>
      </ul>
    </footer>
  );
};
export default Contact;  // Ensure this line is present
