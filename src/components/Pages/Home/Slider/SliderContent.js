import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <div className="slide-image-black"></div>
          <div className="h-auto w-auto m-8">
            <h1 className="slide-title font-semibold">{slide.title}</h1>
            <h2 className="slide-text text-gray-400">{slide.description}</h2>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
