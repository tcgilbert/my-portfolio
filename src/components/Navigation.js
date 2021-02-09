import React from "react"

const Navigation = () => {
  return (
    <div className="navigation">
      <div>
        <h1>TG</h1>
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
            <a href="#" className="navigation__link">
              About
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Projects
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Contact
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
