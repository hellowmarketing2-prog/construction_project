import React, { useContext, useEffect, useState } from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";
import { toast } from "react-toastify";
import { apiUrl, token } from "../common/http";
import { AuthContext } from "../frontend/context/Auth";

const AdminSettings = () => {
  const { user } = useContext(AuthContext);
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAdmins = async () => {
    try {
      const res = await fetch(apiUrl + "admins", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
      });

      const result = await res.json();

      if (res.ok && result.status) {
        setAdmins(result.data || []);
      } else {
        toast.error(result.message || "Unable to load admins");
      }
    } catch (error) {
      toast.error("Unable to load admin list");
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const deleteAdmin = async (adminId) => {
    if (!user) {
      toast.error("Please login again");
      return;
    }

    if (Number(user.id) === Number(adminId)) {
      toast.error("You cannot delete your own account from this screen.");
      return;
    }

    const password = window.prompt(
      "Enter your password to confirm admin deletion:",
    );

    if (!password || password.trim() === "") {
      toast.error("Password is required to delete an admin.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(apiUrl + `admins/${adminId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
        body: JSON.stringify({ password }),
      });

      const result = await res.json();

      if (res.ok && result.status) {
        toast.success(result.message || "Admin deleted successfully.");
        fetchAdmins();
      } else {
        toast.error(result.message || "Unable to delete admin.");
      }
    } catch (error) {
      toast.error("Server error while deleting admin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <main>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>

            <div className="col-md-9">
              <div className="card shadow border-0">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <h4 className="h5 mb-1">Admin Settings</h4>
                      <small className="text-muted">
                        Maximum 2 admins allowed.
                      </small>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table className="table table-striped align-middle">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Created</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {admins.length > 0 ? (
                          admins.map((admin) => (
                            <tr key={admin.id}>
                              <td>{admin.id}</td>
                              <td>{admin.name}</td>
                              <td>{admin.email}</td>
                              <td>
                                {new Date(
                                  admin.created_at,
                                ).toLocaleDateString()}
                              </td>
                              <td>
                                <button
                                  className="btn btn-sm btn-outline-danger"
                                  onClick={() => deleteAdmin(admin.id)}
                                  disabled={
                                    loading ||
                                    Number(user?.id) === Number(admin.id)
                                  }
                                >
                                  {Number(user?.id) === Number(admin.id)
                                    ? "Current Admin"
                                    : "Delete"}
                                </button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="5" className="text-center text-muted">
                              No admins found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
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

export default AdminSettings;
