
import React, { Component } from "react"
import Header from "../components/Header"
import About from "../components/About"

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      hideMenu: false,  
    }
    this.timerPointer = null
    this.handleMouseMovement = this.handleMouseMovement.bind(this)
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


  render() {
    return (
      <div>
        <Header hideMenu={this.state.hideMenu}/>
        <About />
      </div>
    )
  }
}
