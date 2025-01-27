import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About =()=>{
    return(
        <section className={styles.container} >
            <h2 className={styles.title} >Abouts</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/About.jpg")} alt="Me sitting with a laptop"
                className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3  id="about">Forntend Devloper</h3>
                        <p>I'm a frontend developer with expericen in building responsive and 
                            optimized sites
                        </p>
                    </div>
            </li>
            <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Devloper</h3>
                        <p>I have experiece developing fast and optimized back-end 
                            systems and APIs
                        </p>
                    </div>
            </li>
            <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>I'm a frontend developer with expericen in building responsive and 
                            optimized sites
                        </p>
                    </div>
            </li>
            </ul>
           </div>

        </section>
    );
}