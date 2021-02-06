import React, { Component } from "react"
import Header from "../components/Header"
import About from "../components/About"
import Projects from "../components/Projects"
import MenuIcon from "@material-ui/icons/Menu"

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      hideMenu: false,
      menuHover: false,
    }
    this.timerPointer = null
    this.handleMouseMovement = this.handleMouseMovement.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
  }

  componentDidMount() {
    document.addEventListener("mousemove", this.handleMouseMovement)
    this.handleTimer()
  }

  handleMouseMovement() {
    clearTimeout(this.timerPointer)
    this.setState({ hideMenu: false })
    this.handleTimer()
  }

  handleTimer() {
    this.timerPointer = setTimeout(() => {
      this.setState({ hideMenu: true })
    }, 2000)
  }

  handleMouseOver() {
    this.setState({ menuHover: true })
  }
  
  handleMouseOut() {
    this.setState({ menuHover: false })
  }

  render() {
    return (
      <div>
        <MenuIcon
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          style={{ fontSize: 55, color:"black" }}
          className={this.state.hideMenu && !this.state.menuHover ? "hidden" : "menu-btn"}
        />
        <Header hideMenu={this.state.hideMenu} />
        <div id="about-anchor"></div>
        <About />
        <Projects />
      </div>
    )
  }
}
