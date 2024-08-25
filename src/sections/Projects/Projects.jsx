import React from 'react';
import styles from './Projects.module.css';
import LibraryProjectImg from '../../assets/Library.jpg';
import PortfoioWebsite from '../../assets/Portfolio-website.jpg'

function Projects(){

    return(
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className="ProjectsContainer">
                <a href='https://github.com/paranietharan74/library-management-system-web-application' target='_blank'>
                    <img src={LibraryProjectImg} alt="Project img" srcset="" className={styles.hover} />
                    <h3>Library Management System</h3>
                    <p>Web based Management App</p>
                </a>
            </div>

            <div className="ProjectsContainer">
                <a href='https://github.com/paranietharan74/library-management-system-web-application' target='_blank'>
                    <img src={PortfoioWebsite} alt="Project img" srcset="" className={styles.hover} />
                    <h3>Portfolio website</h3>
                    <p>React js Portfolio website</p>
                </a>
            </div>
        </section>
    )
}

export default Projects;