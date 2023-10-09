import React from "react";
import "./Home.scss";
import { Header, Slider, Footer, Boxes, Courses } from "./../../components";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";

const Home = () => {
  const { slider } = useContext(AppContext);

  return (
    <div className="home-container">
      <Header />
      {slider && <Slider />}
      <Boxes />
      <Courses />
      <Footer />
    </div>
  );
};

export default Home;
