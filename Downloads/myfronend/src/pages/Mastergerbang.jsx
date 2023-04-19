import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Mastergerbang = () => {
  const [gerbangData, setGerbangData] = useState([
    {
      id_gerbang: 1,
      nama: "Gerbang A",
      kode: "GA",
      lokasi_gerbang: "Jakarta",
      id_kategori: 11,
      id_ruas: 1,
    },
    {
      id_gerbang: 2,
      nama: "Gerbang B",
      kode: "GB",
      lokasi_gerbang: "Surabaya",
      id_kategori: 12,
      id_ruas: 2,
    },
    {
      id_gerbang: 3,
      nama: "Gerbang C",
      kode: "GC",
      lokasi_gerbang: "Bandung",
      id_kategori: 13,
      id_ruas: 3,
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
    setGerbangData(gerbangData.filter((gerbang) => gerbang.id_gerbang !== id));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="mt-4 mb-4">Manajemen Gerbang</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          <Link to="/tambahgerbang" className="btn btn-primary">
            Tambah Gerbang
          </Link>
        </div>
        <div className="col-12">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>Nama Gerbang</th>
                <th>Kode Gerbang</th>
                <th>Lokasi Gerbang</th>
                <th>ID Gerbang</th>
                <th>ID Ruas</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody onClick={handleRowClick}>
              {gerbangData.map((gerbang) => (
                <tr key={gerbang.id_gerbang}>
                  <td>{gerbang.nama}</td>
                  <td>{gerbang.kode}</td>
                  <td>{gerbang.lokasi_gerbang}</td>
                  <td>{gerbang.id_gerbang}</td>
                  <td>{gerbang.id_ruas}</td>
                  <td>
                    <div className="btn-group" role="group">
                      <Link to="/viewgerbang">
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
                      <Link to="/editgerbang">
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
                        onClick={() => handleDelete(gerbang.id_gerbang)}
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

export default Mastergerbang;
