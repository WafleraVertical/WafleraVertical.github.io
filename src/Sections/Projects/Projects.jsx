import styles from './ProjectsStyles.module.css';
import VW from '../../assets/Volkswagen_logo_2019.svg';
import LaLiga from '../../assets/laliga.png';
import Kobe from '../../assets/kobe.jpg';
import Genero from '../../assets/generos.JPG';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Proyectos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={VW}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Transporte de Personal VW"
          p="Dashboard Power Bi"
        />
        <ProjectCard
          src={LaLiga}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Simulacion La Liga española"
          p="Simulacion Montecarlo Python"
        />
        <ProjectCard
          src={Kobe}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Kobe Bryant Selection Shot"
          p="Power BI Analisys"
        />
        <ProjectCard
          src={Genero}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Clasificación por Género Musical"
          p="Red Convolucional Python "
        />
      </div>
    </section>
  );
}

export default Projects;