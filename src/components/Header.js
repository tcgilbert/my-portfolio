import React from "react"

const Header = props => {
  function handleArrowClick() {
    window.location.href = "#about-anchor"
  }

  return (
    <div className="header">
      <div className="title-container">
        <h1 className="title">Thomas Gilbert</h1>
        <h1 className="subtitle">Web Developer</h1>
        <div className="arrow-btn" onMouseDown={handleArrowClick}>
          <p className="down-arrow">{"\u032c"}</p>
        </div>
      </div>
    </div>
  )
}

export default Header
