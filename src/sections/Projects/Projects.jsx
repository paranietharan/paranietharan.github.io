import React from 'react';
import styles from './Projects.module.css';
import LibraryProjectImg from '../../assets/Library.jpg';
import hardwareProjrctImg from '../../assets/hardwareProject.jpg';

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
                <a href='https://github.com/paranietharan/Automatic-Sandwich-Making-Machine.git' target='_blank'>
                    <img src={hardwareProjrctImg} alt="Project img" srcset="" className={styles.hover} />
                    <h3>Automatic Sandwich Making Machine</h3>
                    <p>First year group harware project</p>
                </a>
            </div>
        </section>
    )
}

export default Projects;