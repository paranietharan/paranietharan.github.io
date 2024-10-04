import styles from "./Hero.module.css";
import profileImgWhite from "../../assets/profile-img-white.png";
import profileImgBlack from "../../assets/profile-img-black.jpg";
import EmailDark from "../../assets/email-dark.png";
import EmailLight from "../../assets/email-light.png";
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
    const profileImg = theme === 'light' ? profileImgWhite : profileImgBlack;
    const EmailIcon = theme === 'light' ? EmailDark : EmailLight;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={profileImg} alt="Profile Image" />
        <img className={styles.colorMode} src={themeIcon} alt="Color Mode" onClick={toggleTheme}/>
      </div>

      <div className="info">
        <h1>Paranietharan
            <br />
            Palasuntharam
        </h1>
        <h2>Software Developer</h2>

        <span>
            <a href="mailto:paranietharan20@gmail.com" target="_blank">
                <img src={EmailIcon} alt="Instagram" style={{maxWidth: '40px', maxHeight: '40px'}}/>
            </a>
            <a href="https://github.com/paranietharan" target="_blank">
                <img src={githubIcon} alt="Github Icon" style={{maxWidth: '40px', maxHeight: '40px'}}/>
            </a>
            <a href="https://www.linkedin.com/in/paranietharan-palasuntharam/" target="_blank">
                <img src={linkedInIcon} alt="LinkedIn icon" style={{maxWidth: '40px', maxHeight: '40px'}}/>
            </a>
        </span>

        <p className={styles.description}>developing modern React web apps for commercial businesses.</p>

        {/* <a>
          <button className="hover">Resume</button>
        </a> */}
      </div>
    </section>
  );
}

export default Hero;
