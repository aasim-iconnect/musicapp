import { Link } from "react-router-dom";
import "../App.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/songs">Song Lists</Link>
    </div>
  );
};

export default NavBar;
