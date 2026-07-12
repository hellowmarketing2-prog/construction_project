import React, { useEffect, useState } from "react";
import { apiUrl, token } from "../../common/http";
import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import Footer from "../../common/Footer";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const Show = () => {
  const [services, setServices] = useState([]);
  const fetchServices = async () => {
    const res = await fetch(apiUrl + "services", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
    });
    const result = await res.json();
    setServices(result.data);
    // console.log(result);
  };
const deleteService = async (id) => {
  if (confirm("Are you sure to delete this service?")) {
    const res = await fetch(apiUrl + "services/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
    });

    const result = await res.json();

    if (result.status == true) {
      const newServices = services.filter(service => service.id != id); // refresh list
      setServices(newServices);
      toast.success(result.message);

    } else {
      alert("Delete failed");
    }
  }
};
  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9 ">
              <div className="card shadow border-0 ">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between">
                    <h4 className="h5">Services</h4>
                    <Link
                      to="/admin/services/create"
                      className="btn btn-primary"
                    >
                      Create
                    </Link>
                  </div>
                  <hr />

                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {services &&
                        services.map((service) => {
                          return (
                            <tr key={service.id}>
                              <td>{service.id}</td>
                              <td>{service.title}</td>
                              <td>{service.slug}</td>
                              <td>
                                {service.status == 1 ? "Active" : "Block"}
                              </td>
                              <td>
                                <Link
                                  to={`/admin/services/edit/${service.id}`}
                                  className="btn btn-primary sm"
                                >
                                  Edit
                                </Link>
                       <button
  onClick={() => deleteService(service.id)}
  className="btn btn-secondary sm ms-2"
>
  Delete
</button>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
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

export default Show;
