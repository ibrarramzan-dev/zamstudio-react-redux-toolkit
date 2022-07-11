import "./Layout.css";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div id="layout-container">
      <div id="sidemenu">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/getType">
            <li>Get Type</li>
          </Link>
          <Link to="/addType">
            <li>Add Type</li>
          </Link>
          <Link to="/updateType">
            <li>Update Type</li>
          </Link>
        </ul>
      </div>
      <div id="form-component">{children}</div>
    </div>
  );
};

export default Layout;
