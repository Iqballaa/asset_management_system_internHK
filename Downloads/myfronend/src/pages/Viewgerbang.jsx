import React, { useState } from "react";
import { Link } from "react-router-dom";

const ViewGerbang = () => {
  const [ruasData, setRuasData] = useState([
    {
      nama: "Ruas B",
      kode: "RB",
      lokasi: "Bandung",
      id_gerbang: 8,
      id_ruas: "002",
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
    const newRuasData = [...ruasData];
    newRuasData.splice(index, 1);
    setRuasData(newRuasData);
  };

  const handleDownload = (index) => {
    // handle download logic here
    console.log("Downloading data at index:", index);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="mt-4 mb-4">View Gerbang</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>Nama Gerbang</th>
                <th>Kode Gerbang</th>
                <th>Lokasi Gerbang</th>
                <th>ID Gerbang</th>
                <th>ID Ruas</th>
              </tr>
            </thead>
            <tbody onClick={handleRowClick}>
              {ruasData.map((gerbang, index) => (
                <tr key={gerbang.id_gerbang}>
                  <td>{gerbang.nama}</td>
                  <td>{gerbang.kode}</td>
                  <td>{gerbang.lokasi}</td>
                  <td>{gerbang.id_gerbang}</td>
                  <td>{gerbang.id_ruas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewGerbang;
