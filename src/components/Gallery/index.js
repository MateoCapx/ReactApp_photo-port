import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/0.jpg";

// props Short for properties

function Gallery(props) {
    console.log(props)
  const currentCategory = {
    name: "commercial",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div className="flex-row">
          <img 
            src={photo}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
            />
      </div>
    </section>
  );
}
export default Gallery;

