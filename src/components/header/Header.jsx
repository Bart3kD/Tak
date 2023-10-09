import "./Header.scss";
import { useContext } from "react";
import { AppContext } from "./../../context/app.context";
import { Link } from "react-router-dom";

const Header = () => {
  const { logged } = useContext(AppContext);

  return (
    <div className="header-container container">
      <h2>Header</h2>
      <ul className="menu">
        <li>
          <a href="#section1">Boxes</a>
        </li>
        <li>
          <a href="#section2">Courses</a>
        </li>
        {logged && <Link to="/admin">Admin</Link>}
      </ul>
    </div>
  );
};

export default Header;
