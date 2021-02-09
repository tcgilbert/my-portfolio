import React from 'react'

const Projects = () => {


    const kscopeRedirect = () => {
        window.open("https://kaleidoscope-budget.herokuapp.com/", "_blank")
    }

    const thinkeweRedirect = () => {
        window.open("https://think-ewe.herokuapp.com/", "_blank")
    }

    const sauceRedirect = () => {
        window.open("https://tcgilbert.github.io/rocket-sauce/", "_blank")
    }

    return (
        <div className="projects-section">
            <div className="projects-container">
                <div>
                    <h1 className="projects-heading">Featured Projects</h1>
                    <hr className="about-hr"/>
                </div>
                <div onClick={kscopeRedirect} className="kaleidoscope" data-sal-duration="700" data-sal="slide-up">
                    <h1 className="project-title">Kaleidoscope</h1>
                    <p className="project-text">React | Node | MongoDB | Express </p>
                </div>
                <div onClick={thinkeweRedirect} className="think-ewe" data-sal-duration="700" data-sal="slide-up">
                    <h1 className="project-title">Think Ewe</h1>
                    <p className="project-text">React | Node | PostgreSQL | Express </p>
                </div>
                <div onClick={sauceRedirect} className="rocket-sauce" data-sal-duration="700" data-sal="slide-up">
                    <h1 className="project-title">Rocket Sauce</h1>
                    <p className="project-text">Vanilla JS | HTML5 Canvas | Adobe PS</p>
                </div>
            </div>
        </div>
    )
}

export default Projects
