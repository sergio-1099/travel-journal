import React from "react"
import pin from "../assets/location-pin.svg"

function Entry() {
  return (
    <section className="entry--section">
      <img className="entry--image" src="https://source.unsplash.com/WLxQvbMyfas" />
      <div className="entry--info">
        <div className="location-info">
          <div className="location">
            <img src={pin} alt="location pin" />
            <p>Japan</p>
          </div>

          <div className="maps-link">
            <a href="https://www.google.com/">View on Google Maps</a>
          </div>
        </div>

        <h3 className="entry--title">Title</h3>

        <p className="entry--dates">12 Jan, 2021 - 24 Jan, 2021</p>

        <p className="entry--description">Description</p>
      </div>
    </section>
  )
}

export default Entry;