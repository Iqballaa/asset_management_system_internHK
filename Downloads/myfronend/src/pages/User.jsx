import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const User = () => {
  const [users, setUsers] = useState([
    {
      name: "Saeful Millah",
      username: "saeful123",
      departemen: "OPJT",
      user_level: "Divisi",
      id_ruas: "34",
      id_user: "01",
    },
    {
      name: "Iqbal Ramadhan",
      username: "iqbal456",
      departemen: "OPJT",
      user_level: "Cabang",
      id_ruas: "34",
      id_user: "03",
    },
    {
      name: "Sapardi",
      username: "sapardi789",
      departemen: "OPJT",
      user_level: "Admin",
      id_ruas: "34",
      id_user: "04",
    },
  ]);

  const handleRowClick = (e) => {
    const row = e.currentTarget;
    const icons = row.querySelectorAll(".action-icon");

    icons.forEach((icon, index) => {
      icon.classList.add(`color-${index + 1}`);
      setTimeout(() => {
        icon.classList.remove(`color-${index + 1}`);
      }, 500);
    });
  };

  const handleDelete = (index) => {
    setUsers((prevUsers) => prevUsers.filter((user, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="mt-4 mb-4">Manajemen User</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          <Link to="/tambahuser" className="btn btn-primary">
            Tambah User
          </Link>
        </div>
        <div className="col-12">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>Full Name</th>
                <th>Username</th>
                <th>Departemen</th>
                <th>User Level</th>
                <th>ID Ruas</th>
                <th>ID User</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody onClick={handleRowClick}>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.departemen}</td>
                  <td>{user.user_level}</td>
                  <td>{user.id_ruas}</td>
                  <td>{user.id_user}</td>
                  <td>
                    <div className="btn-group" role="group">
                      <Link to="/viewuser">
                        <button
                          type="button"
                          className="btn btn-sm btn-primary mr-2"
                        >
                          <FontAwesomeIcon
                            icon={faEye}
                            className="action-icon"
                          />
                        </button>
                      </Link>
                      <Link to="/edituser">
                        <button type="button" className="btn btn-sm btn-warning mr-2">
                          <FontAwesomeIcon icon={faEdit} className="action-icon" />
                      </button>
                       </Link>
                        <button type="button" className="btn btn-sm btn-danger" onClick={() => handleDelete(index)}>
                        <FontAwesomeIcon icon={faTrash} className="action-icon" />
                       </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
