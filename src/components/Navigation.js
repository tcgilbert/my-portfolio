import { Link } from "gatsby"
import React from "react"
import Pdf from "../assests/img/resume.pdf"

const Navigation = () => {
  return (
      <div className="navigation">
        <div>
          <Link to="/" href="#top" className="navigation__initials">TG</Link>
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />
          <label htmlFor="navi-toggle" className="navigation__menu-btn">
            X
          </label>
          <div className="navigation__background"></div>
        </div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link to="/#about-anchor" className="navigation__link">
                About
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="/#projects" className="navigation__link">
                Projects
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="/#contact" className="navigation__link">
                Contact
              </Link>
            </li>
            <li className="navigation__item">
              <a
                href={Pdf}
                target="_blank"
                id="resume-link"
                className="navigation__link"
              >
                Resume <span id="arrow-resume">{"\u2197"}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default Navigation
