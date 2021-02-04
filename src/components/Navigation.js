import React from "react"

const Navigation = () => {
  return (
    <div className="navigation">

        <h3 className="site-title">
          <span className="first-last">Thomas</span>
          <br />
          <span className="first-last" id="last-name">Gilbert</span>
        </h3>

        <div className="nav-tab-container">
            <h3 className="nav-tab">About</h3>
            <h3 className="nav-tab">Projects</h3>
            <h3 className="nav-tab">Contact</h3>
            <h3 className="nav-tab">Resume</h3>
        </div>

    </div>
  )
}

export default Navigation
