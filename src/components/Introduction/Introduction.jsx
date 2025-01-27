// import React from "react";
// import styles from "./Introduction.module.css"; // Import CSS module for styling

// export const Introduction = () => {
//   return (
//     <section className={styles.container} aria-labelledby="introduction-title">
//       <h2 id="introduction-title" >
//       {/* className={styles.title} */}
//         INTRODUCTION
//       </h2>
//       <div >
//   <h3 className={styles.overview}>Overview</h3>
//   <p className={styles.description}>
//     I’m <strong>Muhammad Flaifel</strong>, a <strong>Software Engineering specialist</strong> with 
//     a British diploma from <strong>Luminus Technical University College</strong>.
//     My studies equipped me with strong <strong>programming fundamentals</strong> and 
//     <strong>web development skills</strong>, including a comprehensive course in 
//     <strong>Git</strong> for effective code management. I interned as part of a 
//     <strong>Full Stack team</strong>, working with <strong>JavaScript, HTML, and CSS</strong>, 
//     which gave me hands-on experience in building applications from scratch. I also studied 
//     <strong>React</strong> for creating interactive user interfaces and completed a 
//     <strong>9-month internship</strong> developing software with <strong>.NET</strong>. 
//     In addition to my internships, I also taught programming to more than one 
//     student, enhancing my skills in <strong>knowledge transfer</strong>. 
//     I’m eager to continue developing my expertise and contribute to 
//     <strong>innovative projects</strong> that improve user experience.
//   </p>
// </div>
//     </section>
//   );
// };

import React from "react";
import styles from "./Introduction.module.css";

export const Introduction = () => {
  return (
    <section className={styles.container} aria-labelledby="introduction-title">
      <h2 id="introduction-title" className={styles.title}>
        INTRODUCTION
      </h2>
      <div className={styles.content}>
        <h3 className={styles.overview}>Overview</h3>
        <p className={styles.description}>
          I’m <strong>Muhammad Flaifel</strong>, a <strong>Software Engineering </strong>specialist with 
          a British diploma from <br/>
          <strong>Luminus Technical University College</strong>.
          My studies equipped me with strong programming fundamentals and 
          <br/><strong> web development skills</strong>, including a comprehensive course in 
          <strong> Git</strong> for effective code management. I interned as part of a <br/>
          <strong>Full Stack team</strong>, working with <strong>JavaScript, HTML, and CSS</strong>, 
         <br/> which gave me hands-on experience in building applications from scratch.
         <br/> I also studied 
          <strong> React</strong> for creating interactive user interfaces and completed a 
          <strong> 9-month internship</strong><br/>
           developing software with <strong>.NET</strong>. 
          In addition to my internships, <br/>I also taught programming to more than one 
          student, enhancing my skills in knowledge transfer. <br/>
          I’m eager to continue developing my expertise and contribute to 
          <strong>innovative projects</strong> that improve user experience.
        </p>
      </div>

      <section className={styles.container} aria-labelledby="skills-title">
      
      <div className={styles.skillsGrid}>
        <div className={styles.skillCard}>
          <h3 className={styles.skillTitle}>.NET</h3>
          <p className={styles.skillRole}>Developer</p>
        </div>
        <div className={styles.skillCard}>
          <h3 className={styles.skillTitle}>React</h3>
          <p className={styles.skillRole}>Developer</p>
        </div>
        <div className={styles.skillCard}>
          <h3 className={styles.skillTitle}>Backend</h3>
          <p className={styles.skillRole}>Developer</p>
        </div>
        <div className={styles.skillCard}>
          <h3 className={styles.skillTitle}>Desktop</h3>
          <p className={styles.skillRole}>Developer</p>
        </div>
      </div>
    </section>

    </section>

    
  );
};