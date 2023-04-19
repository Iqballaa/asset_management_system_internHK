import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Mastersubkategori = () => {
  const [subkategoriData, setSubkategoriData] = useState([
    {
      nama: "Gerbang A",
      kode: "GA",
      id_subkategori: 1,
      id_kategori: 11,
    },
    {
      nama: "Gerbang B",
      kode: "GB",
      id_subkategori: 2,
      id_kategori: 12,
    },
    {
      nama: "Gerbang C",
      kode: "GC",
      id_subkategori: 3,
      id_kategori: 13,
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

  const handleDelete = (id) => {
    setSubkategoriData(subkategoriData.filter((subkategori) => subkategori.id_subkategori !== id));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="mt-4 mb-4">Manajemen Subkategori</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          <Link to="/tambahsubkategori" className="btn btn-primary">
            Tambah Subkategori
          </Link>
        </div>
        <div className="col-12">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>Nama Subkategori</th>
                <th>Kode Subkategori</th>
                <th>ID Subkategori</th>
                <th>ID Kategori</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody onClick={handleRowClick}>
              {subkategoriData.map((subkategori) => (
                <tr key={subkategori.id_subkategori}>
                  <td>{subkategori.nama}</td>
                  <td>{subkategori.kode}</td>
                  <td>{subkategori.id_subkategori}</td>
                  <td>{subkategori.id_kategori}</td>
                  <td>
                    <div className="btn-group" role="group">
                      <Link to="/viewsubkategori">
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
                      <Link to="/editsubkategori">
                        <button
                          type="button"
                          className="btn btn-sm btn-warning mr-2"
                        >
                          <FontAwesomeIcon
                            icon={faEdit}
                            className="action-icon"
                          />
                        </button>
                      </Link>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(subkategori.id_subkategori)}
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="action-icon"
                        />
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

export default Mastersubkategori;
