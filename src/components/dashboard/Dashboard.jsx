import "./Dashboard.scss";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { slider, setSlider } = useContext(AppContext);

  return (
    <div className="dashboard-container">
      <div>
        <Link to="/">Show home page</Link>
      </div>
      <div className="section-settings">
        <div className="title">
          <h2>Slider</h2>
          <button onClick={() => setSlider(!slider)}>
            {slider ? "OFF" : "ON"}
          </button>
        </div>
        <div className="settings"></div>
      </div>
    </div>
  );
};

export default Dashboard;
