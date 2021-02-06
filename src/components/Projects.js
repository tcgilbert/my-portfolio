import React from 'react'

const Projects = () => {
    return (
        <div className="projects-section">
            <div className="projects-container">
                <h1 className="projects-heading">Featured Projects</h1>
                <div className="kaleidoscope">
                    <h1 className="project-title">Kaleidoscope</h1>
                    <p className="project-text">React | Node | MongoDB | Express </p>
                </div>
                <div className="think-ewe">
                    <h1 className="project-title">Think Ewe</h1>
                    <p className="project-text">React | Node | PostgreSQL | Express </p>
                </div>
                <div className="rocket-sauce">
                    <h1 className="project-title">Rocket Sauce</h1>
                    <p className="project-text">Vanilla JS | HTML5 Canvas | Adobe Photoshop</p>
                </div>
            </div>
        </div>
    )
}

export default Projects
