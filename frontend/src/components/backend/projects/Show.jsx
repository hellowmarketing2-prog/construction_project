import React, { useEffect, useState } from 'react'
import Footer from '../../common/Footer';
import Sidebar from '../../common/Sidebar';
import Header from '../../common/Header';
import { Link } from 'react-router-dom';
import { apiUrl, token } from '../../common/http';

const Show = () => {
        const [projects, setprojects] = useState([]);
        const fetchprojects = async () => {
          const res = await fetch(apiUrl + "projects", {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${token()}`,
            },
          });
          const result = await res.json();
          setprojects(result.data);
          // console.log(result);
        };
      const deleteproject = async (id) => {
        if (confirm("Are you sure to delete this project?")) {
          const res = await fetch(apiUrl + "projects/" + id, {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${token()}`,
            },
          });
      
          const result = await res.json();
      
          if (result.status == true) {
            const newprojects = projects.filter(project => project.id != id); // refresh list
            setprojects(newprojects);
            toast.success(result.message);
      
          } else {
            alert("Delete failed");
          }
        }
      };
        useEffect(() => {
          fetchprojects();
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
                    <h4 className="h5">Projects</h4>
                    <Link
                      to="/admin/projects/create"
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
                      {projects &&
                        projects.map((project) => {
                          return (
                            <tr key={project.id}>
                              <td>{project.id}</td>
                              <td>{project.title}</td>
                              <td>{project.slug}</td>
                              <td>
                                {project.status == 1 ? "Active" : "Block"}
                              </td>
                              <td>
                                <Link
                                  to={`/admin/projects/edit/${project.id}`}
                                  className="btn btn-primary sm"
                                >
                                  Edit
                                </Link>
                       <button
  onClick={() => deleteproject(project.id)}
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
  )
}

export default Show
