import React, { useEffect, useState } from 'react'
import Footer from '../../common/Footer';
import Sidebar from '../../common/Sidebar';
import Header from '../../common/Header';
import { Link } from 'react-router-dom';
import { apiUrl, token } from '../../common/http';
import { toast } from 'react-toastify';

const Show = () => {
   const [members, setMembers] = useState([]);
    const fetchMembers = async () => {
      const res = await fetch(apiUrl + "members", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
      });
      const result = await res.json();
      setMembers(result.data);
      };
const deleteMember = async (id) => {
  if (confirm("Are you sure to delete this member?")) {
    const res = await fetch(apiUrl + "members/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
    });

    const result = await res.json();

    if (result.status == true) {
      const newMember = members.filter(members => members.id != id); // refresh list
      setMembers(newMember);
      toast.success(result.message);

    } else {
      alert("Delete failed");
    }
  }
};
        useEffect(() => {
          fetchMembers();
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
                    <h4 className="h5">Members</h4>
                    <Link
                      to="/admin/members/create"
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
                        <th>Job Title</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {members &&
                        members.map((member) => {
                          return (
                            <tr key={member.id}>
                              <td>{member.id}</td>
                              <td>{member.name}</td>
                              <td>{member.job_title}</td>
                              <td>
                                {member.status == 1 ? "Active" : "Block"}
                              </td>
                              <td>
                                <Link
                                  to={`/admin/members/edit/${member.id}`}
                                  className="btn btn-primary sm"
                                >
                                  Edit
                                </Link>
                       <button
  onClick={() => deleteMember(member.id)}
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
