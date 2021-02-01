import React from "react"
import InfoContainer from "../components/InfoContainer"
import OtherContainer from "../components/OtherContainer"

export default function Home() {
  return (
    <div className="the-parent-container">
      <InfoContainer />
      <OtherContainer />
    </div>
  )
}
