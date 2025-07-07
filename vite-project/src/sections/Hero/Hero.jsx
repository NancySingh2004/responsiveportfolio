import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

import styles from './HeroStyles.module.css';

import heroImg from '../../assets/avatar.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Resume.pdf';

import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <>
      <section id="hero" className={styles.container}>
        <motion.div
          className={styles.colorModeContainer}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img className={styles.hero} src={heroImg} alt="Profile" />
          <img className={styles.colorMode} src={themeIcon} alt="Theme toggle" onClick={toggleTheme} />
        </motion.div>

        <motion.div
          className={styles.info}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1>Nancy <br /> Singh</h1>
          
     <h2>
  <TypeAnimation
    sequence={[
      'Frontend Developer 💻', 2000,
      'React Enthusiast ⚛️', 2000
    ]}
    speed={50}
    repeat={Infinity}
    wrapper="span"
  />
</h2>



          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter icon" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
          </motion.span>

          <p className={styles.description}>
            Passionate about creating beautiful and performant web experiences with modern tech.
          </p>

          <motion.a
            href={CV}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className={styles.resumeButton}>Download Resume</button>
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}

export default Hero;
