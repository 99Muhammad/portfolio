// import React from "react";

// import styles from "./Experience.module.css";
// import skills from "../../data/skills.json";
// import history from "../../data/history.json";
// import { getImageUrl } from "../../utils";

// export const Experience = () => {
//   return (
//     <section className={styles.container} id="experience">
//       <h2 className={styles.title}>Experience</h2>
//       <div className={styles.content}>
//         <div className={styles.skills}>
//           {skills.map((skill, id) => {
//             return (
//               <div key={id} className={styles.skill}>
//                 <div className={styles.skillImageContainer}>
//                   <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
//                 </div>
//                 <p>{skill.title}</p>
//               </div>
//             );
//           })}
//         </div>
//         <ul className={styles.history}>
//           {history.map((historyItem, id) => {
//             return (
//               <li key={id} className={styles.historyItem}>
//                 <img
//                   src={getImageUrl(historyItem.imageSrc)}
//                   alt={`${historyItem.organisation} Logo`}
//                 />
//                 <div className={styles.historyItemDetails}>
//                   <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
//                   <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
//                   <ul>
//                     {historyItem.experiences.map((experience, id) => {
//                       return <li key={id}>{experience}</li>;
//                     })}
//                   </ul>
//                 </div>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </section>
//   );
// };

import React from "react";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} aria-labelledby="experience-title" >
      <h2 id="experience" className={styles.title}>
        EXPERIENCE
      </h2>

      
      <div className={styles.experienceCard}>
        <h3 className={styles.jobTitle}>.NET and Full-Stack Web Development Intern <h6>[March 2024 – November 2024]</h6>
</h3>
        <p className={styles.company}>Abdul Aziz Al Ghurair School of Advanced Computing (ASAC)</p>
        <ul className={styles.responsibilities}>
        <li>- Developed full-stack applications using .NET ASP.NET Core, WebAPI and front-end frameworks to build scalable, secure, and user friendly solutions.</li>
        <li>- Designed and implemented RESTful APIs, ensuring seamless integration between back-end services and front-end applications.</li>
        <li>- Optimized database performance and queries for SQL Server,enhancing overall application efficiency.</li>

        </ul>
      </div>

      <div className={styles.experienceCard}>
  <h3 className={styles.jobTitle}>Back-End Developer Intern <h6>[March 2024 – November 2024]</h6></h3>
  
  <p className={styles.company}>Luminus Technical University College</p>
  <ul className={styles.responsibilities}>
    <li>- Developed an educational platform that connects students and volunteers for academic events and sessions.</li>
    <li>- Utilized ASP.NET Core and integrated Google API for seamless automation of academic processes.</li>
    <li>- Collaborated with cross-functional teams, including designers, team leads, and other developers, to create high-quality products.</li>
    <li>- Participated in code reviews and provided constructive feedback to other developers.</li>
  </ul>
</div>


     
      <div className={styles.experienceCard}>
        <h3 className={styles.jobTitle}>Desktop Application Development Intern <h6>[November 2022 - February 2024]</h6></h3>
        <p className={styles.company}>Programming Advices School </p>
        <ul className={styles.responsibilities}>
         
          <li>- Developed desktop applications using C#, Windows Forms, and ADO.NET</li>
          <li>- Designed and managed relational databases with SQL Server, and optimizing database queries</li>
          <li>- Integrated ADO.NET for seamless communication between applications and databases.</li>
          <li>- Built user-friendly and efficient desktop interfaces tailored to client requirements.</li>
        </ul>
      </div>
     

    </section>
  );
};