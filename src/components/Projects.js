import React from 'react'
import { Link } from "gatsby"
const Projects = () => {


    const kscopeRedirect = () => {
        window.open("")
        // window.open("https://kaleidoscope-budget.herokuapp.com/", "_blank")
    }

    const thinkeweRedirect = () => {
        window.open("https://think-ewe.herokuapp.com/", "_blank")
    }

    const sauceRedirect = () => {
        window.open("https://tcgilbert.github.io/rocket-sauce/", "_blank")
    }

    return (
        <div id="projects" className="projects-section">
            <div className="projects-container">
                <div>
                    <h1 className="projects-heading">Featured Projects</h1>
                    <hr className="about-hr"/>
                </div>
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

export default Projects
