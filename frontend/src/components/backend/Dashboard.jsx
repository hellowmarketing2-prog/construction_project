import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../frontend/context/Auth";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9 dashboard">
              <div className="card shadow border-0 ">
                {/* <div className="card-body d-flex justify-content-center align-items-center">
                  <h4>Welcome to admin console</h4>
                </div> */}

                <div className="card-body p-4">
                  <div className="mb-4">
                    <h2 className="fw-bold">Welcome Admin 👋</h2>
                    <p className="text-muted">
                      Manage your website from one place.
                    </p>
                  </div>

                  <div className="row g-4">
                    <div className="col-md-3">
                      <div className="card border-0 shadow-sm text-center p-3">
                        <h1>📁</h1>
                        <h3>12</h3>
                        <p>Total Projects</p>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="card border-0 shadow-sm text-center p-3">
                        <h1>🛠</h1>
                        <h3>8</h3>
                        <p>Services</p>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="card border-0 shadow-sm text-center p-3">
                        <h1>📞</h1>
                        <h3>35</h3>
                        <p>Contacts</p>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="card border-0 shadow-sm text-center p-3">
                        <h1>👥</h1>
                        <h3>5</h3>
                        <p>Users</p>
                      </div>
                    </div>
                  </div>

                  <div className="card mt-5 shadow-sm border-0">
                    <div className="card-body">
                      <h4 className="mb-3">Quick Actions</h4>

                      <Link to="/admin/projects/create" className="btn btn-primary me-2">
                        Add Project
                      </Link>

                      <Link to="/admin/services/create" className="btn btn-primary me-2">
                        Add Service
                      </Link>

                      <Link className="btn btn-primary">View Website</Link>
                    </div>
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
