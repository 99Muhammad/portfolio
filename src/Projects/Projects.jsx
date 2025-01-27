import React from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";
import projects from "../data/projects.json";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2>My work</h2>
      <h1 className={styles.title}><bold>Projects</bold></h1>
      <p style={{ fontSize: '25px' }}>Following projects showcase my skills and experience through real-world
         examples of my work. Each project is briefly described with links to code
          repositories and live demos. It reflects my ability to solve complex problems, 
          work with different technologies, and manage projects effectively.</p>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

// import React from "react";
// import projects from "../data/projects.json";

// export const Projects = () => {
//   return (
//     <section className={styles.container} id="projects">
//       <h2 className={styles.title}>Projects</h2>
//       <div className={styles.projects}>
//         {/* {projects.map((project, id) => {
//           return <ProjectCard key={id} project={project} />;
//         })} */}
//       </div>
//     </section>
//   );
// };