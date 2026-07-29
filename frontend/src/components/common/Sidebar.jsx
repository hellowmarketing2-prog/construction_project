import { Link } from "react-router-dom";
import { AuthContext } from "../frontend/context/Auth";
import React, { useContext } from "react";

export const Sidebar = () => {
  const { logout } = useContext(AuthContext);

  //   const handleLogout = () => {
  //     logout();
  //     navigate("/admin/login");
  //   };

  return (
    <>
      {/* Sidebar */}
      <div className="card shadow border-0">
        <div className="card-body p-4 sidebar">
          <h4>Sidebar</h4>
          <ul>
            <li>
              <Link to="/admin/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/services">Services</Link>
            </li>
            <li>
              <Link to="/admin/projects">Projects</Link>
            </li>
            <li>
              <Link to="/admin/articles">Articles</Link>
            </li>
            <li>
              <Link to="/admin/testimonials">Testimonials</Link>
            </li>
            <li>
              <button onClick={logout} className="btn btn-primary mt-4">
                Logout
              </button>
              {/* <buttond
                    onClick={handleLogout}
                    className="btn btn-danger mt-3 small"
                  >
                    Logout
                  </button> */}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
