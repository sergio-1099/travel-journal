import React from "react"
import logo from "../assets/earth.png"

function Nav() {
  return (
    <nav>
      <img className="logo" src={logo} alt="world logo" />
      <h1>my travel journal.</h1>
    </nav>
  )
}

export default Nav;