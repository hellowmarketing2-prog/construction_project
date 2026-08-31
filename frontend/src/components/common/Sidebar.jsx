import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../frontend/context/Auth";
import React, { useContext } from "react";
import LogoutButton from "./LogoutButton";

export const Sidebar = () => {
  const { logout } = useContext(AuthContext);
  const location = useLocation();
  const navigation = [
    { label: "Overview", to: "/admin/dashboard", icon: "bi-grid-1x2" },
    { label: "Services", to: "/admin/services", icon: "bi-tools" },
    { label: "Projects", to: "/admin/projects", icon: "bi-buildings" },
    { label: "Articles", to: "/admin/articles", icon: "bi-file-earmark-text" },
    { label: "Testimonials", to: "/admin/testimonials", icon: "bi-chat-quote" },
    { label: "Team members", to: "/admin/members", icon: "bi-people" },
    { label: "Settings", to: "/admin/settings", icon: "bi-gear" },
  ];

  //   const handleLogout = () => {
  //     logout();
  //     navigate("/admin/login");
  //   };

  return (
    <>
      {/* Sidebar */}
      <div className="card shadow border-0">
        <div className="card-body p-4 sidebar">
          <div className="sidebar-heading">
            <span className="sidebar-kicker">Workspace</span>
            <h4>Control room</h4>
          </div>
          <ul>
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  className={
                    location.pathname === item.to ||
                    location.pathname.startsWith(`${item.to}/`)
                      ? "active"
                      : ""
                  }
                  to={item.to}
                >
                  <i className={`bi ${item.icon}`}></i>
                  <span className="ps-2">{item.label}</span>
                  <i className="bi bi-chevron-right nav-arrow"></i>
                </Link>
              </li>
            ))}
            <li>
              <div className="logout-wrapper" onClick={logout}>
                <LogoutButton />
                <span>Sign out</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
