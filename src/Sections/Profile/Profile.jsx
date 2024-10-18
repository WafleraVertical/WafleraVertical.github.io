import styles from './HeroStyles.module.css';
import profileImg from '../../assets/profile-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const {theme,toggleTheme}= useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="profile" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img 
          className={styles.hero} 
          src={profileImg}
          alt="Profile picture of Eduardo Polaco "
          />
          <img 
            className={styles.colorMode}
            src={themeIcon} 
            alt="Icono del modo Oscuro"
            onClick={toggleTheme}
            />
      </div>
      <div className={styles.info}>
        <h1>
          Luis Eduardo
          <br/>
          Polaco Romero
        </h1>
        <h2>Computer Science Engineer</h2>
        <h2>Data Analyst,Data Engineer</h2>
        <h2>Azure Ai Engineer Asossiate</h2>

        <span>

          <a href="https://github.com/WafleraVertical" target="_blank">
            <img src={githubIcon} alt="Github icon"/>
          </a>
          <a href="https://www.linkedin.com/in/luis-eduardo-polaco-romero" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon"/>
          </a>
        </span>
        <p className={styles.description}>
          Ingeniero en Ciencias de la Computación, apasionado por el desarrollo de software y la tecnología.
        </p>
        <a href={CV} download>
          <button className="hover" >
            CV
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero