import styles from './ProjectsStyles.module.css';
import VW from '../../assets/Volkswagen_logo_2019.svg';
import Pinguino from '../../assets/pinguino-dj.png';
import rana from '../../assets/frogjump.png';
import Genero from '../../assets/generos.jpg';
import Azure from '../../assets/azure_ingeniero.png';
import spotify from '../../assets/dash.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Proyectos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={VW}
          link="https://github.com"
          h3="Transporte de Personal VW"
          p="Dashboard Power Bi"
        />
        <ProjectCard
          src={Pinguino}
          link="https://github.com/WafleraVertical/Botnice-Discord"
          h3="BotNice"
          p="Bot de Discord con Python"
        />
        <ProjectCard
          src={rana}
          link="https://github.com/WafleraVertical/FrogJump"
          h3="FrogJump"
          p="Demo de videojuego de Plataformas en Python"
        />
        <ProjectCard
          src={Genero}
          link="https://github.com/WafleraVertical/Clasificaci-n-Musical-por-Genero"
          h3="Clasificación por Género Musical"
          p="Red Convolucional Python "
        />
        <ProjectCard
        src={Azure}
        link="https://github.com/WafleraVertical/AI-Azure-Implementations"
        h3="Fun Implementations Azure"
        p="Projecto de React con la API de Azure"
      />
      <ProjectCard
          src={spotify}
          link="https://github.com/WafleraVertical/Spotify-2023-Analytics"
          h3="Spotify"
          p="Dashboard de Analisis sobre lo mas escuchado en 2023"
        />
      </div>
    </section>
  );
}

export default Projects;