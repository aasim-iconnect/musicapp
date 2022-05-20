import { useLocation, useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
const Song = () => {
  const { state } = useLocation();
  return (
    <div style={{ margin: "20px" }}>
      <div>Songs details:</div>
      <div> Song Name: {state.name}</div>
      <div> Song Author: {state.author}</div>
    </div>
  );
};

export default Song;
