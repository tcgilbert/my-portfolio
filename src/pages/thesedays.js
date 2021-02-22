import React from "react"
import Navigation from "../components/Navigation"
import AbbrevFooter from "../components/AbbrevFooter"
import TdPreview from "../assests/img/td_preview.png"
import OtherProjects from "../components/OtherProjects"

const thesedays = () => {
  return (
    <div>
      <Navigation />
      <div className="project">
        <div className="project__container">
          <img
            className="project__img"
            src={TdPreview}
            alt="Project Preview"
          />
          <div>
            <h1 className="project__title">These Days (work in progress)</h1>
            <h1 className="project__subtitle">Mobile Website Generator</h1>
            <hr className="about-hr" />
            <p className="project__text">
              <span className="project__subsection">About: </span>
              Best described as linktr.ee but for sharing more than just links.
            </p>
            <p className="project__text">
              <span className="project__subsection">Technologies: </span>
              React.js, Node, Express.js, PostgreSQL, SCSS, Material UI, Cloudinary, React beautiful dnd
            </p>
            <p className="project__text">
              <span className="project__subsection">3rd Party API's: </span>
              Spotify API, Google Books API
            </p>
            <p className="project__text">
              <span className="project__subsection">Deployment: </span>TBD
            </p>
            <p className="project__text">
              <span className="project__subsection">Front-end Repo: </span>
              <a
                className="project__link"
                href="https://github.com/tcgilbert/td-front"
                target="_blank"
              >
                Github Front
              </a>
            </p>
            <p className="project__text">
              <span className="project__subsection">Back-end Repo: </span>
              <a
                className="project__link"
                href="https://github.com/tcgilbert/td-back"
                target="_blank"
              >
                Github Back
              </a>
            </p>
          </div>
        </div>
      </div>
      <OtherProjects page="days" />
      <AbbrevFooter />
    </div>
  )
}

export default thesedays