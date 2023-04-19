import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Masterkategori = () => {
  const [kategoriData, setKategoriData] = useState([
    {
      nama: "Gerbang A",
      kode: "GA",
      id: 1,
    },
    {
      nama: "Gerbang B",
      kode: "GB",
      id: 2,
    },
    {
      nama: "Gerbang C",
      kode: "GC",
      id: 3,
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
    setKategoriData(kategoriData.filter((kategori) => kategori.id !== id));
    console.log(`Deleting category with id ${id}`);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="mt-4 mb-4">Manajemen Kategori</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          <Link to="/tambahkategori" className="btn btn-primary">
            Tambah Kategori
          </Link>
        </div>
        <div className="col-12">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>Nama Kategori</th>
                <th>Kode Kategori</th>
                <th>ID Kategori</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody onClick={handleRowClick}>
              {kategoriData.map((kategori) => (
                <tr key={kategori.id}>
                  <td>{kategori.nama}</td>
                  <td>{kategori.kode}</td>
                  <td>{kategori.id}</td>
                  <td>
                    <div className="btn-group" role="group">
                      <Link to="/viewkategori">
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
                      <Link to="/editkategori">
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
                        onClick={() => handleDelete(kategori.id)}
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

export default Masterkategori;
