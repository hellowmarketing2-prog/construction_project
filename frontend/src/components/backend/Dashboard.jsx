import React from "react";
import { Link } from "react-router-dom";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";

const Dashboard = () => {
  const stats = [
    {
      label: "Total Projects",
      value: "12",
      change: "+12%",
      icon: "bi-buildings",
      link: "/admin/projects",
      linkText: "View projects",
      tone: "projects",
    },
    {
      label: "Services",
      value: "8",
      change: "Active",
      icon: "bi-tools",
      link: "/admin/services",
      linkText: "Manage services",
      tone: "services",
    },
    {
      label: "Enquiries",
      value: "35",
      change: "5 new",
      icon: "bi-inbox",
      link: "/admin/contacts",
      linkText: "Review requests",
      tone: "contacts",
    },
    {
      label: "Team Members",
      value: "5",
      change: "Online",
      icon: "bi-people",
      link: "/admin/members",
      linkText: "Manage team",
      tone: "team",
    },
  ];

  const quickActions = [
    {
      title: "Add Project",
      description: "Launch a new construction project",
      to: "/admin/projects/create",
      icon: "bi-building-add",
    },
    {
      title: "Add Service",
      description: "Create a premium service listing",
      to: "/admin/services/create",
      icon: "bi-tools",
    },
    {
      title: "Post Article",
      description: "Publish new blog content",
      to: "/admin/articles/create",
      icon: "bi-pencil-square",
    },
    {
      title: "Add Member",
      description: "Update your team profile list",
      to: "/admin/members/create",
      icon: "bi-person-plus",
    },
    {
      title: "Check Messages",
      description: "Review customer enquiries",
      to: "https://mailtrap.io/sandboxes/4884495/messages/5673822273",
      icon: "bi-envelope-open",
    },
    {
      title: "Website Settings",
      description: "Update branding and website details",
      to: "/admin/settings",
      icon: "bi-sliders",
    },
  ];

  const enquiries = [
    {
      initials: "JS",
      name: "John Smith",
      details: "Residential construction project",
      time: "2h ago",
    },
    {
      initials: "AM",
      name: "Ahmed Malik",
      details: "Commercial building inquiry",
      time: "5h ago",
    },
    {
      initials: "SK",
      name: "Sarah Khan",
      details: "House renovation project",
      time: "1d ago",
    },
    {
      initials: "MA",
      name: "Muhammad Ali",
      details: "Office construction",
      time: "2d ago",
    },
  ];

  return (
    <>
      <Header />

      <main className="admin-dashboard">
        <div className="container-fluid dashboard-shell px-4 px-lg-5 py-4">
          <div className="dashboard-header dashboard-hero mb-4">
            <div className="dashboard-header-copy">
              <span className="dashboard-subtitle">Admin Console</span>

              <h1 className="fw-bold mt-1 mb-2">Welcome back, Admin 👋</h1>

              <p className="mb-0">
                Manage projects, services, enquiries and website updates from
                one simple workspace.
              </p>
            </div>

            <div className="dashboard-header-actions">
              <Link
                to="/"
                target="_blank"
                className="btn btn-outline-dark me-2"
              >
                <i className="bi bi-box-arrow-up-right me-2"></i>View Website
              </Link>

              <Link to="/admin/projects/create" className="btn btn-primary">
                <i className="bi bi-plus-lg me-2"></i>Add Project
              </Link>
            </div>
          </div>

          <div className="row g-4 align-items-start">
            <div className="col-lg-3">
              <Sidebar />
            </div>

            <div className="col-lg-9">
              <div className="dashboard-spotlight mb-4">
                <div className="dashboard-spotlight-header">
                  <div>
                    <span>Today at a glance</span>
                    <h3>Operational overview</h3>
                  </div>
                  <div className="dashboard-spotlight-pill">Healthy</div>
                </div>

                <div className="dashboard-spotlight-grid">
                  <div className="dashboard-spotlight-card">
                    <strong>08</strong>
                    <span>Pending tasks</span>
                  </div>

                  <div className="dashboard-spotlight-card">
                    <strong>05</strong>
                    <span>New enquiries</span>
                  </div>

                  <div className="dashboard-spotlight-card">
                    <strong>92%</strong>
                    <span>Website health</span>
                  </div>
                </div>
              </div>

              <div className="row g-4 mb-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="col-md-6 col-xl-3">
                    <div className="dashboard-stat-card">
                      <div className="stat-top">
                        <div className={`stat-icon ${stat.tone}`}>
                          <i className={`bi ${stat.icon}`}></i>
                        </div>

                        <span className="stat-badge">{stat.change}</span>
                      </div>

                      <h2>{stat.value}</h2>

                      <p>{stat.label}</p>

                      <Link to={stat.link}>{stat.linkText} →</Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="dashboard-panel mb-4">
                <div className="panel-header">
                  <div>
                    <h4>Quick actions</h4>
                    <p>Common tasks to keep your site active and growing</p>
                  </div>
                </div>

                <div className="row g-3">
                  {quickActions.map((action) => (
                    <div key={action.title} className="col-md-6 col-xl-4">
                      <Link to={action.to} className="quick-action">
                        <div className="quick-icon">
                          <i className={`bi ${action.icon}`}></i>
                        </div>

                        <div className="quick-action-copy">
                          <h6>{action.title}</h6>
                          <span>{action.description}</span>
                        </div>

                        <strong>→</strong>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="row g-4">
                <div className="col-lg-7">
                  <div className="dashboard-panel h-100">
                    <div className="panel-header">
                      <div>
                        <h4>Recent enquiries</h4>
                        <p>Latest customer messages and requests</p>
                      </div>

                      <Link to="/admin/contacts">View all</Link>
                    </div>

                    <div className="enquiry-list">
                      {enquiries.map((item) => (
                        <div key={item.name} className="enquiry-item">
                          <div className="enquiry-avatar">{item.initials}</div>

                          <div className="enquiry-info">
                            <h6>{item.name}</h6>
                            <p>{item.details}</p>
                          </div>

                          <span className="enquiry-time">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="dashboard-panel h-100">
                    <div className="panel-header">
                      <div>
                        <h4>Website overview</h4>
                        <p>Current status of your digital presence</p>
                      </div>
                    </div>

                    <div className="website-status">
                      <div className="status-row">
                        <span>Website</span>
                        <strong className="online">● Online</strong>
                      </div>

                      <div className="status-row">
                        <span>Projects</span>
                        <strong>12 published</strong>
                      </div>

                      <div className="status-row">
                        <span>Services</span>
                        <strong>8 published</strong>
                      </div>

                      <div className="status-row">
                        <span>Blog posts</span>
                        <strong>18 published</strong>
                      </div>

                      <div className="status-row">
                        <span>Team members</span>
                        <strong>5 active</strong>
                      </div>
                    </div>

                    <div className="status-meter-wrap">
                      <div className="status-meter">
                        <span style={{ width: "92%" }}></span>
                      </div>
                      <small>Performance score: 92%</small>
                    </div>

                    <Link
                      to="/"
                      target="_blank"
                      className="btn btn-dark w-100 mt-4"
                    >
                      Visit live website →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Dashboard;
