
import React from "react";
import { Link } from "react-router-dom";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";

const Dashboard = () => {
  return (
    <>
      <Header />

      <main className="admin-dashboard">
        <div className="container-fluid px-4 px-lg-5 py-4">

          {/* =========================
              DASHBOARD HEADER
          ========================== */}
          <div className="dashboard-header mb-4">
            <div>
              <span className="dashboard-subtitle">
                ADMIN CONSOLE
              </span>

              <h1 className="fw-bold mt-1 mb-2">
                Welcome back, Admin 👋
              </h1>

              <p className="text-muted mb-0">
                Manage your construction website, projects and enquiries
                from one place.
              </p>
            </div>

            <div className="dashboard-header-actions">
              <Link
                to="/"
                target="_blank"
                className="btn btn-outline-dark me-2"
              >
                🌐 View Website
              </Link>

              <Link
                to="/admin/projects/create"
                className="btn btn-primary"
              >
                + Add Project
              </Link>
            </div>
          </div>


          <div className="row">

            {/* =========================
                SIDEBAR
            ========================== */}
            <div className="col-lg-3 mb-4">
              <Sidebar />
            </div>


            {/* =========================
                MAIN DASHBOARD
            ========================== */}
            <div className="col-lg-9">

              {/* =========================
                  STATISTICS
              ========================== */}
              <div className="row g-4 mb-4">

                {/* Projects */}
                <div className="col-md-6 col-xl-3">
                  <div className="dashboard-stat-card">
                    <div className="stat-top">
                      <div className="stat-icon projects">
                        🏗️
                      </div>

                      <span className="stat-badge">
                        +12%
                      </span>
                    </div>

                    <h2>12</h2>

                    <p>
                      Total Projects
                    </p>

                    <Link to="/admin/projects">
                      View Projects →
                    </Link>
                  </div>
                </div>


                {/* Services */}
                <div className="col-md-6 col-xl-3">
                  <div className="dashboard-stat-card">
                    <div className="stat-top">
                      <div className="stat-icon services">
                        🛠️
                      </div>

                      <span className="stat-badge">
                        Active
                      </span>
                    </div>

                    <h2>8</h2>

                    <p>
                      Services
                    </p>

                    <Link to="/admin/services">
                      Manage Services →
                    </Link>
                  </div>
                </div>


                {/* Contacts */}
                <div className="col-md-6 col-xl-3">
                  <div className="dashboard-stat-card">
                    <div className="stat-top">
                      <div className="stat-icon contacts">
                        📩
                      </div>

                      <span className="stat-badge">
                        5 New
                      </span>
                    </div>

                    <h2>35</h2>

                    <p>
                      Contact Enquiries
                    </p>

                    <Link to="/admin/contacts">
                      View Enquiries →
                    </Link>
                  </div>
                </div>


                {/* Team */}
                <div className="col-md-6 col-xl-3">
                  <div className="dashboard-stat-card">
                    <div className="stat-top">
                      <div className="stat-icon team">
                        👥
                      </div>

                      <span className="stat-badge">
                        Active
                      </span>
                    </div>

                    <h2>5</h2>

                    <p>
                      Team Members
                    </p>

                    <Link to="/admin/team">
                      Manage Team →
                    </Link>
                  </div>
                </div>

              </div>


              {/* =========================
                  QUICK ACTIONS
              ========================== */}
              <div className="dashboard-panel mb-4">

                <div className="panel-header">
                  <div>
                    <h4>
                      Quick Actions
                    </h4>

                    <p>
                      Frequently used administration tools
                    </p>
                  </div>
                </div>


                <div className="row g-3">

                  <div className="col-md-6 col-xl-4">
                    <Link
                      to="/admin/projects/create"
                      className="quick-action"
                    >
                      <div className="quick-icon">
                        🏗️
                      </div>

                      <div>
                        <h6>
                          Add New Project
                        </h6>

                        <span>
                          Create a construction project
                        </span>
                      </div>

                      <strong>→</strong>
                    </Link>
                  </div>


                  <div className="col-md-6 col-xl-4">
                    <Link
                      to="/admin/services/create"
                      className="quick-action"
                    >
                      <div className="quick-icon">
                        🛠️
                      </div>

                      <div>
                        <h6>
                          Add New Service
                        </h6>

                        <span>
                          Create a new service
                        </span>
                      </div>

                      <strong>→</strong>
                    </Link>
                  </div>


                  <div className="col-md-6 col-xl-4">
                    <Link
                      to="/admin/blogs/create"
                      className="quick-action"
                    >
                      <div className="quick-icon">
                        📝
                      </div>

                      <div>
                        <h6>
                          Write New Blog
                        </h6>

                        <span>
                          Publish new content
                        </span>
                      </div>

                      <strong>→</strong>
                    </Link>
                  </div>


                  <div className="col-md-6 col-xl-4">
                    <Link
                      to="/admin/team/create"
                      className="quick-action"
                    >
                      <div className="quick-icon">
                        👤
                      </div>

                      <div>
                        <h6>
                          Add Team Member
                        </h6>

                        <span>
                          Add someone to your team
                        </span>
                      </div>

                      <strong>→</strong>
                    </Link>
                  </div>


                  <div className="col-md-6 col-xl-4">
                    <Link
                      to="/admin/contacts"
                      className="quick-action"
                    >
                      <div className="quick-icon">
                        📬
                      </div>

                      <div>
                        <h6>
                          View Messages
                        </h6>

                        <span>
                          Check customer enquiries
                        </span>
                      </div>

                      <strong>→</strong>
                    </Link>
                  </div>


                  <div className="col-md-6 col-xl-4">
                    <Link
                      to="/admin/settings"
                      className="quick-action"
                    >
                      <div className="quick-icon">
                        ⚙️
                      </div>

                      <div>
                        <h6>
                          Website Settings
                        </h6>

                        <span>
                          Manage website settings
                        </span>
                      </div>

                      <strong>→</strong>
                    </Link>
                  </div>

                </div>
              </div>


              {/* =========================
                  BOTTOM SECTION
              ========================== */}
              <div className="row g-4">

                {/* Recent Enquiries */}
                <div className="col-lg-7">

                  <div className="dashboard-panel h-100">

                    <div className="panel-header">
                      <div>
                        <h4>
                          Recent Enquiries
                        </h4>

                        <p>
                          Latest customer messages
                        </p>
                      </div>

                      <Link to="/admin/contacts">
                        View All
                      </Link>
                    </div>


                    <div className="enquiry-list">

                      <div className="enquiry-item">
                        <div className="enquiry-avatar">
                          JS
                        </div>

                        <div className="enquiry-info">
                          <h6>
                            John Smith
                          </h6>

                          <p>
                            Residential Construction Project
                          </p>
                        </div>

                        <span className="enquiry-time">
                          2h ago
                        </span>
                      </div>


                      <div className="enquiry-item">
                        <div className="enquiry-avatar">
                          AM
                        </div>

                        <div className="enquiry-info">
                          <h6>
                            Ahmed Malik
                          </h6>

                          <p>
                            Commercial Building Inquiry
                          </p>
                        </div>

                        <span className="enquiry-time">
                          5h ago
                        </span>
                      </div>


                      <div className="enquiry-item">
                        <div className="enquiry-avatar">
                          SK
                        </div>

                        <div className="enquiry-info">
                          <h6>
                            Sarah Khan
                          </h6>

                          <p>
                            House Renovation Project
                          </p>
                        </div>

                        <span className="enquiry-time">
                          1d ago
                        </span>
                      </div>


                      <div className="enquiry-item">
                        <div className="enquiry-avatar">
                          MA
                        </div>

                        <div className="enquiry-info">
                          <h6>
                            Muhammad Ali
                          </h6>

                          <p>
                            Office Construction
                          </p>
                        </div>

                        <span className="enquiry-time">
                          2d ago
                        </span>
                      </div>

                    </div>

                  </div>

                </div>


                {/* Website Overview */}
                <div className="col-lg-5">

                  <div className="dashboard-panel h-100">

                    <div className="panel-header">
                      <div>
                        <h4>
                          Website Overview
                        </h4>

                        <p>
                          Current website status
                        </p>
                      </div>
                    </div>


                    <div className="website-status">

                      <div className="status-row">
                        <span>
                          Website
                        </span>

                        <strong className="online">
                          ● Online
                        </strong>
                      </div>


                      <div className="status-row">
                        <span>
                          Projects
                        </span>

                        <strong>
                          12 Published
                        </strong>
                      </div>


                      <div className="status-row">
                        <span>
                          Services
                        </span>

                        <strong>
                          8 Published
                        </strong>
                      </div>


                      <div className="status-row">
                        <span>
                          Blog Posts
                        </span>

                        <strong>
                          18 Published
                        </strong>
                      </div>


                      <div className="status-row">
                        <span>
                          Team Members
                        </span>

                        <strong>
                          5 Active
                        </strong>
                      </div>

                    </div>


                    <Link
                      to="/"
                      target="_blank"
                      className="btn btn-dark w-100 mt-4"
                    >
                      Visit Live Website →
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

