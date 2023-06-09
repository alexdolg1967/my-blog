import React from 'react';

import project1 from '../img/projects/01.jpg'
import project2 from '../img/projects/02.jpg'
import project3 from '../img/projects/03.jpg'
import project4 from '../img/projects/04.jpg'
import project5 from '../img/projects/05.jpg'
import project6 from '../img/projects/06.jpg'


const Projects = () => {
  return (
    <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                <li className="project">
                    <a href="./project-page.html">
                        <img src={project1} alt="Project img" className="project__img" />
                        <h3 className="project__title">Gaming streaming portal</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="./project-page.html">
                        <img src={project2} alt="Project img" className="project__img" />
                        <h3 className="project__title">Video service</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="./project-page.html">
                        <img src={project3} alt="Project img" className="project__img" />
                        <h3 className="project__title">Video portal</h3>
                    </a>
                </li>
                <li className="project">
                    <img src={project4} alt="Project img" className="project__img" />
                    <h3 className="project__title">Dating app</h3>
                </li>
                <li className="project">
                    <img src={project5} alt="Project img" className="project__img" />
                    <h3 className="project__title">Landing</h3>
                </li>
                <li className="project">
                    <img src={project6} alt="Project img" className="project__img" />
                    <h3 className="project__title">Gaming community</h3>
                </li>

            </ul>
        </div>
    </main>
  )
}

export default Projects