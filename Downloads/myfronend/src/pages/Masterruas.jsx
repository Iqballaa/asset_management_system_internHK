import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Masterruas = () => {
  const [ruasData, setRuasData] = useState([    {      nama: "Ruas A",      kode: "RA",      panjang: "10 km",      lokasi: "Jakarta",      jumlahCabang: 5,      id: "001",    },    {      nama: "Ruas B",      kode: "RB",      panjang: "15 km",      lokasi: "Bandung",      jumlahCabang: 8,      id: "002",    },    {      nama: "Ruas C",      kode: "RC",      panjang: "20 km",      lokasi: "Surabaya",      jumlahCabang: 12,      id: "003",    },  ]);

  const handleRowClick = (e) => {
    const row = e.currentTarget;
    const icons = row.querySelectorAll(".action-icon");

    icons.forEach((icon, index) => {
      icon.classList.add(`color-${index+1}`);
      setTimeout(() => {
        icon.classList.remove(`color-${index+1}`);
      }, 500);
    });
  };

  const handleDelete = (index) => {
    const newRuasData = [...ruasData];
    newRuasData.splice(index, 1);
    setRuasData(newRuasData);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="mt-4 mb-4">Manajemen Ruas</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          <Link to="/tambahruas" className="btn btn-primary">
            Tambah Ruas
          </Link>
        </div>
        <div className="col-12">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>Nama Ruas</th>
                <th>Kode Ruas</th>
                <th>Panjang Ruas</th>
                <th>Lokasi Ruas</th>
                <th>Jumlah Cabang</th>
                <th>ID Ruas</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody onClick={handleRowClick}>
              {ruasData.map((ruas, index) => (
                <tr key={index}>
                  <td>{ruas.nama}</td>
                  <td>{ruas.kode}</td>
                  <td>{ruas.panjang}</td>
                  <td>{ruas.lokasi}</td>
                  <td>{ruas.jumlahCabang}</td>
                  <td>{ruas.id}</td>
                  <td>
                    <div className="btn-group" role="group">
                      <Link to="/viewruas">
                        <button type="button" className="btn btn-sm btn-primary mr-2">
                          <FontAwesomeIcon icon={faEye} className="action-icon" />
                      </button>
                       </Link>
                      <Link to="/editruas">
                        <button type="button" className="btn btn-sm btn-warning mr-2">
                          <FontAwesomeIcon icon={faEdit} className="action-icon" />
                      </button>
                       </Link>
                       <button type="button" className="btn btn-sm btn-danger" onClick={handleDelete}>
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

export default Masterruas;
