import styles from "./Hero.module.css";
import profileImg from "../../assets/hero-img.png";
import InstagramIcon from "../../assets/instagram.svg";
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";
import {useTheme} from "../../common/ThemeContext";

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === "light" ? sunIcon : moonIcon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedInIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero">
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={profileImg} alt="Profile Image" />
        <img className={styles.colorMode} src={themeIcon} alt="Color Mode" onClick={toggleTheme}/>
      </div>

      <div className="info">
        <h1>Paranietharan
            <br />
            Palasuntharam
        </h1>
        <h2>Software Developper</h2>

        <span>
            <a href="#" target="_blank">
                <img src={InstagramIcon} alt="Instagram" style={{maxWidth: '20px', maxHeight: '20px'}}/>
            </a>
            <a href="#" target="_blank">
                <img src={githubIcon} alt="Github Icon" style={{maxWidth: '20px', maxHeight: '20px'}}/>
            </a>
            <a href="#" target="_blank">
                <img src={linkedInIcon} alt="LinkedIn icon" style={{maxWidth: '20px', maxHeight: '20px'}}/>
            </a>
        </span>

        <p>With a passion for developing modern React web apps for commercial
        businesses.</p>

        <a>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
