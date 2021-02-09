import React from "react"
import Navigation from "../components/Navigation"
import AbbrevFooter from "../components/AbbrevFooter"
import RsPreview from "../assests/img/rs_preview.png"

const kaleidoscope = () => {
    return (
        <div>
            <Navigation />
      <div className="project">
        <div className="project__container">
          <img
            className="project__img"
            src={RsPreview}
            alt="Project Preview"
          />
          <div>
            <h1 className="project__title">Rocket Sauce</h1>
            <h1 className="project__subtitle">Web Game</h1>
            <hr className="about-hr" />
            <p className="project__text">
              <span className="project__subsection">About: </span>Because of the simplicity of the tech stack, I wanted to spend most of my time having fun with the creative side of this project. Aside from the design, this project relies heavily on Object Oriented Program, Collision Detection, and Particle Animation.
            </p>
            <p className="project__text">
              <span className="project__subsection">Technologies: </span>
              Vanilla JS, HTML5 Canvas, Adobe Photoshop
            </p>
            <p className="project__text">
              <span className="project__subsection">Deployment: </span>Github Pages
            </p>
            <p className="project__text">
              <span className="project__subsection">Live Site: </span>
              <a
                className="project__link"
                href="https://tcgilbert.github.io/rocket-sauce/"
                target="_blank"
              >
                RocketSauce
              </a>
            </p>
            <p className="project__text">
              <span className="project__subsection">Repo: </span>
              <a
                className="project__link"
                href="https://github.com/tcgilbert/rocket-sauce"
                target="_blank"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </div>
      <AbbrevFooter />
        </div>
    )
}

export default kaleidoscope
