import React from "react"
import Navigation from "../components/Navigation"
import AbbrevFooter from "../components/AbbrevFooter"
import KscopePreview from "../assests/img/kscope_preview.png"
import OtherProjects from "../components/OtherProjects"

const kaleidoscope = () => {
  return (
    <div>
      <Navigation />
      <div className="project">
        <div className="project__container">
          <img
            className="project__img"
            src={KscopePreview}
            alt="Project Preview"
          />
          <div>
            <h1 className="project__title">Kaleidoscope</h1>
            <h1 className="project__subtitle">Budgeting App</h1>
            <hr className="about-hr" />
            <p className="project__text">
              <span className="project__subsection">About: </span>Kaleidoscope
              is an app for seeing how simple life changes can result in
              dramatic budget opportunities. It was made through the
              collaborative efforts of Alan Avery, Jackson Reeves, Jeremy Uriz,
              and Thomas Gilbert.
            </p>
            <p className="project__text">
              <span className="project__subsection">Technologies: </span>
              React.js, Node, Express.js, MongoDB, Mongoose, SCSS
            </p>
            <p className="project__text">
              <span className="project__subsection">3rd Party API's: </span>
              Numbeo API for location based data
            </p>
            <p className="project__text">
              <span className="project__subsection">Deployment: </span>Heroku
            </p>
            <p className="project__text">
              <span className="project__subsection">Live Site: </span>
              <a
                className="project__link"
                href="https://kaleidoscope-budget.herokuapp.com/"
                target="_blank"
              >
                Kaleidoscope
              </a>
            </p>
            <p className="project__text">
              <span className="project__subsection">Front-end Repo: </span>
              <a
                className="project__link"
                href="https://github.com/jtreeves/budget-frontend"
                target="_blank"
              >
                Github Front
              </a>
            </p>
            <p className="project__text">
              <span className="project__subsection">Back-end Repo: </span>
              <a
                className="project__link"
                href="https://github.com/jtreeves/budget-frontend"
                target="_blank"
              >
                Github Back
              </a>
            </p>
          </div>
        </div>
      </div>
      <OtherProjects page="scope" />
      <AbbrevFooter />
    </div>
  )
}

export default kaleidoscope
