import React from "react"
import Navigation from "../components/Navigation"
import AbbrevFooter from "../components/AbbrevFooter"
import TePreview from "../assests/img/te_preview.png"
import OtherProjects from "../components/OtherProjects"

const kaleidoscope = () => {
    return (
        <div>
           <Navigation />
      <div className="project">
        <div className="project__container">
          <img
            className="project__img"
            src={TePreview}
            alt="Project Preview"
          />
          <div>
            <h1 className="project__title">Think Ewe</h1>
            <h1 className="project__subtitle">Social Network for Readers</h1>
            <hr className="about-hr" />
            <p className="project__text">
              <span className="project__subsection">About: </span>Think Ewe (pronounced "think you") is my first attempt at my own version of a social network app, with the theme of books! My goal for this project was to create a site like "goodreads.com", but make it more indicative of a typical social network.
            </p>
            <p className="project__text">
              <span className="project__subsection">Technologies: </span>
              React.js, Node, Express.js, PostgreSQL, Sequelize, Material UI
            </p>
            <p className="project__text">
              <span className="project__subsection">3rd Party API's: </span>
              Google Books
            </p>
            <p className="project__text">
              <span className="project__subsection">Deployment: </span>Heroku
            </p>
            <p className="project__text">
              <span className="project__subsection">Live Site: </span>
              <a
                className="project__link"
                href="https://think-ewe.herokuapp.com/"
                target="_blank"
              >
                Think Ewe
              </a>
            </p>
            <p className="project__text">
              <span className="project__subsection">Front-end Repo: </span>
              <a
                className="project__link"
                href="https://github.com/tcgilbert/think_ewe_front"
                target="_blank"
              >
                Github Front
              </a>
            </p>
            <p className="project__text">
              <span className="project__subsection">Back-end Repo: </span>
              <a
                className="project__link"
                href="https://github.com/tcgilbert/think-ewe-back"
                target="_blank"
              >
                Github Back
              </a>
            </p>
          </div>
        </div>
      </div>
      <OtherProjects />
      <AbbrevFooter />
        </div>
    )
}

export default kaleidoscope
