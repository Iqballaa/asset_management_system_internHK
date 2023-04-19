import React, { useState } from "react";
import { Link } from "react-router-dom";

const Viewruas = () => {
  const [ruasData, setRuasData] = useState([
    {
      nama: "Ruas A",
      kode: "RA",
      panjang: "10 km",
      lokasi: "Jakarta",
      jumlahCabang: 5,
      id: "001",
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
          <h2 className="mt-4 mb-4">View Ruas</h2>
        </div>
      </div>
      <div className="row">
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Viewruas;
