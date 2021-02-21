import React from 'react'
import { Link } from "gatsby"
const OtherProjects = () => {

    return (
        <div id="projects" className="projects-section">
            <div className="projects-container-other">
                <Link to="/kaleidoscope" className="kaleidoscope" data-sal-duration="700" data-sal="slide-up">
                    <h1 className="project-title">Kaleidoscope</h1>
                    <p className="project-text">React | Node | MongoDB | Express </p>
                </Link>
                <Link to="/think-ewe" className="think-ewe" data-sal-duration="700" data-sal="slide-up">
                    <h1 className="project-title">Think Ewe</h1>
                    <p className="project-text">React | Node | PostgreSQL | Express </p>
                </Link>
                <Link to="/rocket-sauce" className="rocket-sauce" data-sal-duration="700" data-sal="slide-up">
                    <h1 className="project-title">Rocket Sauce</h1>
                    <p className="project-text">Vanilla JS | HTML5 Canvas | Adobe PS</p>
                </Link>
            </div>
        </div>
    )
}

export default OtherProjects