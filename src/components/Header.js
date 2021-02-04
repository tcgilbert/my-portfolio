import React from "react"
import MenuOpenSharpIcon from "@material-ui/icons/MenuOpenSharp"

const Header = props => {
  return (
    <div className="header">
      <MenuOpenSharpIcon
        style={{ fontSize: 60 }}
        className={props.hideMenu ? "hidden" : "menu-btn"}
      />
      <div className="title-container">
        <h1 className="title">Thomas Gilbert</h1>
        <h1 className="subtitle">Web Developer</h1>
      </div>
    </div>
  )
}

export default Header

