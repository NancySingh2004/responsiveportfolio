import styles from './ProjectStyles.module.css'
import viberr from '../../assets/textutils.png'
import freshBurger from '../../assets/notes.png'
import hipsster from '../../assets/text.jpg';
import fitLift from '../../assets/hq720.jpg';
import ProjectCard from '../../common/ProjectCard';


function Project() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
       <ProjectCard src={viberr} link="https://github.com/NancySingh2004/Javascript.git" h3="Textutils" />
       <ProjectCard src={freshBurger} link="https://github.com/NancySingh2004/javascriptprojects.git" h3="Notes App"/>
       <ProjectCard src={hipsster} link="https://github.com/NancySingh2004/javascriptprojects.git" h3="Text to Speech Converter"/>
       <ProjectCard src={fitLift} link="https://github.com/NancySingh2004/javascriptprojects.git" h3="Drag and drop menu"/>
        </div>
    </section>
  );
}

export default Project
