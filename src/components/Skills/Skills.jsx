// import React from 'react';
// import styles from './Skills.module.css';  // import styles as a module

// const Skills = () => {
//   return (
//     <div className={styles['skills-container']}>  {/* Use class name from the imported styles object */}
//       <h1>Skills</h1>
      
//       <div className={styles['skills-grid']}>
//         <div className={styles['skill-card']}>
//           <h2>Frontend</h2>
//           <ul>
//             <li>React Js</li>
//             <li>Redux</li>
//             <li>HTML</li>
//             <li>CSS</li>
//             <li>JavaScript</li>
//             <li>Bootstrap</li>
//             <li>Tailwind CSS</li>
//           </ul>
//         </div>
        
//         <div className={styles['skill-card']}>
//           <h2>Backend</h2>
//           <ul>
//             <li>Node Js</li>
//             <li>Express Js</li>
//             <li>C#</li>
//             <li>.NET Framework</li>
//           </ul>
//         </div>
        
//         <div className={styles['skill-card']}>
//           <h2>Database</h2>
//           <ul>
//             <li>MySQL</li>
//             <li>MongoDB</li>
//             <li>PostgreSQL</li>
//           </ul>
//         </div>
        
//         <div className={styles['skill-card']}>
//           <h2>Others</h2>
//           <ul>
//             <li>Git</li>
//             <li>Docker</li>
//             <li>APIs</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;


import React from 'react';
import styles from './Skills.module.css';  // import styles as a module

const Skills = () => {
  return (
    <div className={styles['skills-container']}>
      <h1  id="skills">Skills</h1>
      
      <div className={styles['skills-grid']}>
        {/* Frontend Skills */}
        <div className={styles['skill-card']}>
          <h2>Frontend</h2>
          <div className={styles['skill-box']}>
            <img src="/assets/skills/React.png" alt="React" className={styles['skill-image']} />
            <span>React Js</span>
          </div>
          <div className={styles['skill-box']}>
            <img src="/assets/skills/html-5.png" alt="Redux" className={styles['skill-image']} />
            <span>HTML</span>
          </div>
          <div className={styles['skill-box']}>
            <img src="/assets/skills/CSS.png" alt="Redux" className={styles['skill-image']} />
            <span>CSS</span>
          </div>
          <div className={styles['skill-box']}>
            <img src="/assets/skills/js.png" alt="Redux" className={styles['skill-image']} />
            <span>JS</span>
          </div>
          <div className={styles['skill-box']}>
            <img src="/assets/skills/TailwindCSS.png" alt="Redux" className={styles['skill-image']} />
            <span>Tailwind CSS</span>
          </div>
          <div className={styles['skill-box']}>
            <img src="/assets/skills/Bootstrab.png" alt="Redux" className={styles['skill-image']} />
            <span>Bootstrab</span>
          </div>
         
          {/* Add more skills as needed */}
        </div>

        {/* Backend Skills */}
        <div className={styles['skill-card']}>
          <h2>Backend</h2>
          <div className={styles['skill-box']}>
            <img src="/assets/skills/c-sharp.png" alt="Node Js" className={styles['skill-image']} />
            <span>C#</span>
          </div>
          <div className={styles['skill-box']}>
            <img src="/assets/skills/dotnet.png" alt="Express Js" className={styles['skill-image']} />
            <span>.NET Framework</span>
          </div>
         
          {/* Add more skills as needed */}
        </div>

        {/* Database Skills */}
        <div className={styles['skill-card']}>
          <h2>Database</h2>
          <div className={styles['skill-box']}>
            <img src="/assets/skills/sql-server.png" alt="MySQL" className={styles['skill-image']} />
            <span>SQL</span>
          </div>
        
          {/* Add more skills as needed */}
        </div>

        {/* Other Skills */}
        <div className={styles['skill-card']}>
          <h2>Others</h2>
          <div className={styles['skill-box']}>
            <img src="/assets/skills/git.png" alt="Git" className={styles['skill-image']} />
            <span>Git</span>
          </div>
          <div className={styles['skill-box']}>
            <img src="/assets/skills/github-sign.png" alt="Docker" className={styles['skill-image']} />
            <span>Github</span>
          </div>
          <div className={styles['skill-box']}>
            <img src="/assets/skills/Visual_Studio.png" alt="Docker" className={styles['skill-image']} />
            <span>VS Code</span>
          </div>
          <div className={styles['skill-box']}>
            <img src="/assets/skills/Postman.png" alt="Docker" className={styles['skill-image']} />
            <span>Postman</span>
          </div>
          <div className={styles['skill-box']}>
            <img src="/assets/skills/Figma.jpeg" alt="Docker" className={styles['skill-image']} />
            <span>Figma</span>
          </div>
          {/* Add more skills as needed */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
