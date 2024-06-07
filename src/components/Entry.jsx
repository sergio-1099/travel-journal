import React from "react"
import pin from "../assets/location-pin.svg"

function Entry(props) {
  return (
    <section className="entry--section">
      <img className="entry--image" src={props.imageUrl} alt={props.title} />
      <div className="entry--info">
        <div className="location-info">
          <div className="location">
            <img src={pin} alt="location pin" />
            <p>{props.location.toUpperCase()}</p>
          </div>

          <div className="maps-link">
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
        </div>

        <h3 className="entry--title">{props.title}</h3>

        <p className="entry--dates">{props.startDate} - {props.endDate}</p>

        <p className="entry--description">{props.description}</p>
      </div>
    </section>
  )
}

export default Entry;