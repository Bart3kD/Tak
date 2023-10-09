import "./Slider.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <div className="slider-container container">
      <Carousel>
        <div className=" slide slide-1">
          <p className="legend">Legend 1</p>
        </div>
        <div className="slide slide-2">
          <p className="legend">Legend 2</p>
        </div>
        <div className="slide slide-3">
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
