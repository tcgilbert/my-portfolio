import React from "react"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Header = (props) => {

  function handleArrowClick() {
    window.location.href="#about-anchor"
  }

  return (
    <div className="header">

      <div className="title-container">
        <h1 className="title">Thomas Gilbert</h1>
        <h1 className="subtitle">Web Developer</h1>
      <ExpandMoreIcon onClick={handleArrowClick} style={{ fontSize: 65, color: "white" }} className="arrow-btn"/>
      </div>
      

    </div>
  )
}

export default Header

