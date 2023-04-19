import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Kodefikasi = () => {
  const [ruasData, setRuasData] = useState([   
    {
      namaRuas: "Ruas A",
      kodeRuas: "23",
      namaGerbang: "Gerbang A",
      kodeGerbang: "GA",
      namaKategori: "Kategori A",
      kodeKategori: "KA",
      namaSubkategori: "Subkategori A",
      kodeSubkategori: "28",
      idGerbang: "001",
      idSubkategori: "001A",
      idKodefikasi: "001AA",
    },
    {
      namaRuas: "Ruas A",
      kodeRuas: "23",
      namaGerbang: "Gerbang A",
      kodeRuas: "23",
      namaKategori: "Kategori A",
      kodeKategori: "KA",
      namaSubkategori: "Subkategori A",
      kodeSubkategori: "28",
      idGerbang: "001",
      idSubkategori: "001A",
      idKodefikasi: "001AA",
    },
    {
      namaRuas: "Ruas A",
      kodeRuas: "23",
      namaGerbang: "Gerbang A",
      kodeGerbang: "GA",
      namaKategori: "Kategori A",
      kodeKategori: "KA",
      namaSubkategori: "Subkategori A",
      kodeSubkategori: "28",
      idGerbang: "001",
      idSubkategori: "001A",
      idKodefikasi: "001AA",
    },
   ]);

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
          <h2 className="mt-4 mb-4">Manajemen Kodefikasi</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          <Link to="/tambahkodefikasi" className="btn btn-primary">
            Tambah Kodefikasi
          </Link>
        </div>
        <div className="col-12">
          <table className="table">
            <thead className="table-dark">
            <tr>
                <th>Nama Ruas</th>
                <th>Kode Ruas</th>
                <th>Nama Gerbang</th>
                <th>Kode Gerbang</th>
                <th>Nama Kategori</th>
                <th>Kode Kategori</th>
                <th>Nama Subkategori</th>
                <th>Kode Subkategori</th>
                <th>ID Gerbang</th>
                <th>ID Subkategori</th>
                <th>ID Kodefikasi</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody onClick={handleRowClick}>
              {ruasData.map((gerbang, index) => (
                <tr key={index}>
                  <td>{gerbang.namaRuas}</td>
                  <td>{gerbang.kodeRuas}</td>
                  <td>{gerbang.namaGerbang}</td>
                  <td>{gerbang.kodeGerbang}</td>
                  <td>{gerbang.namaKategori}</td>
                  <td>{gerbang.kodeKategori}</td>
                  <td>{gerbang.namaSubkategori}</td>
                  <td>{gerbang.kodeSubkategori}</td>
                  <td>{gerbang.idGerbang}</td>
                  <td>{gerbang.idSubkategori}</td>
                  <td>{gerbang.idKodefikasi}</td>
                 
                 
                  <td>
                    <div className="btn-group" role="group">
                      <Link to="/viewkodefikasi">
                        <button type="button" className="btn btn-sm btn-primary mr-2">
                          <FontAwesomeIcon icon={faEye} className="action-icon" />
                      </button>
                       </Link>
                      <Link to="/editkodefikasi">
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

export default Kodefikasi;
