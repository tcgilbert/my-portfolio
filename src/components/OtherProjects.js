import React from "react"
import { Link } from "gatsby"
const OtherProjects = props => {
  const handleContent = () => {
    if (props.page === "rocket") {
      return (
        <div className="projects-container-other">
          <Link to="/kaleidoscope" className="kaleidoscope-other">
            <h1 className="project-title">Kaleidoscope</h1>
            <p className="project-text">React | Node | MongoDB | Express </p>
          </Link>
          <Link to="/think-ewe" className="think-ewe-other">
            <h1 className="project-title">Think Ewe</h1>
            <p className="project-text">React | Node | PostgreSQL | Express </p>
          </Link>
          <Link to="/thesedays" className="thesedays-other">
            <h1 className="project-title">These Days</h1>
            <p className="project-text">React | Node | PostgreSQL | Express </p>
            <p className="project-text">(current project)</p>
          </Link>
        </div>
      )
    } else if (props.page === "days") {
      return (
        <div className="projects-container-other">
          <Link to="/kaleidoscope" className="kaleidoscope-other">
            <h1 className="project-title">Kaleidoscope</h1>
            <p className="project-text">React | Node | MongoDB | Express </p>
          </Link>
          <Link to="/think-ewe" className="think-ewe-other">
            <h1 className="project-title">Think Ewe</h1>
            <p className="project-text">React | Node | PostgreSQL | Express </p>
          </Link>
          <Link to="/rocket-sauce" className="rocket-sauce-other">
            <h1 className="project-title">Rocket Sauce</h1>
            <p className="project-text">Vanilla JS | HTML5 Canvas | Adobe PS</p>
          </Link>
        </div>
      )
    } else if (props.page === "scope") {
      return (
        <div className="projects-container-other">
          <Link to="/thesedays" className="thesedays-other">
            <h1 className="project-title">These Days</h1>
            <p className="project-text">React | Node | PostgreSQL | Express </p>
            <p className="project-text">(current project)</p>
          </Link>
          <Link to="/think-ewe" className="think-ewe-other">
            <h1 className="project-title">Think Ewe</h1>
            <p className="project-text">React | Node | PostgreSQL | Express </p>
          </Link>
          <Link to="/rocket-sauce" className="rocket-sauce-other">
            <h1 className="project-title">Rocket Sauce</h1>
            <p className="project-text">Vanilla JS | HTML5 Canvas | Adobe PS</p>
          </Link>
        </div>
      )
    } else if (props.page === "ewe") {
      return (
        <div className="projects-container-other">
          <Link to="/kaleidoscope" className="kaleidoscope-other">
            <h1 className="project-title">Kaleidoscope</h1>
            <p className="project-text">React | Node | MongoDB | Express </p>
          </Link>
          <Link to="/thesedays" className="thesedays-other">
            <h1 className="project-title">These Days</h1>
            <p className="project-text">React | Node | PostgreSQL | Express </p>
            <p className="project-text">(current project)</p>
          </Link>
          <Link to="/rocket-sauce" className="rocket-sauce-other">
            <h1 className="project-title">Rocket Sauce</h1>
            <p className="project-text">Vanilla JS | HTML5 Canvas | Adobe PS</p>
          </Link>
        </div>
      )
    }
  }

  return (
    <div id="projects" className="projects-section">
      {handleContent()}
    </div>
  )
}

export default OtherProjects
