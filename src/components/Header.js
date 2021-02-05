import React from "react"
import MenuOpenSharpIcon from "@material-ui/icons/MenuOpenSharp"

const Header = props => {

  const [menuHover, setMenuHover] = React.useState(false)

  function handleMouseOver() {
    setMenuHover(true)
  }

  function handleMouseOut() {
    setMenuHover(false)
  }

  return (
    <div className="header">
      <MenuOpenSharpIcon
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ fontSize: 60 }}
        className={props.hideMenu && !menuHover ? "hidden" : "menu-btn"}
      />
      <div className="title-container">
        <h1 className="title">Thomas Gilbert</h1>
        <h1 className="subtitle">Web Developer</h1>
      </div>
    </div>
  )
}

export default Header

