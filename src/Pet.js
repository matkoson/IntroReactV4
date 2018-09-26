import React from "react";
import { Link } from "@reach/router";
import Details from "./Details";

class Pet extends React.Component {
  render() {
    const { name, animal, breed, media, location, id } = this.props;

    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }
    return (
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={photos[0].value} alt={name} />
        </div>
        <h1>{animal}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </Link>
    );
  }
}

export default Pet;
