import React from "react";

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span className="prev text-gray-400" onClick={prevSlide}>
        &#10094;
      </span>
      <span className="next text-gray-400" onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  );
}

export default Arrows;
