
import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Pdf from "../assests/img/resume.pdf"
import MenuIcon from "@material-ui/icons/Menu"


const Navigation = () => {
  return (
    <div className="navigation">
      <div>
        <Link to="/" href="#top" className="navigation__initials">
          TG
        </Link>
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <div className="navigation__background">
          <ul className="navigation__list-mobile">
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
        </div>
      </div>

      <nav className="navigation__nav">
        <div className="navigation__hamburger">
          <label id="menu-btn" htmlFor="navi-toggle" className="navigation__menu-btn">
            <MenuIcon
              className="navigation__hamburger-btn"
              style={{ fontSize: "3rem" }}
            />
          </label>
        </div>
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
