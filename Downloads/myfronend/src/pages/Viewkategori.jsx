import React, { useState } from "react";
import { Link } from "react-router-dom";

const ViewKategori = () => {
    const [kategoriData, setKategoriData] = useState([
      {
        nama: "Gerbang A",
        kode: "GA",
        id: 1,
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
      const newKategoriData = [...kategoriData];
      newKategoriData.splice(index, 1);
      setKategoriData(newKategoriData);
    };
  
    const handleDownload = (index) => {
      // Do something to download the kategori data
      console.log("Downloading kategori data:", kategoriData[index]);
    };
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mt-4 mb-4">View Kategori</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table">
              <thead className="table-dark">
                <tr>
                  <th>Nama Kategori</th>
                  <th>Kode Kategori</th>
                  <th>ID Kategori</th>
                </tr>
              </thead>
              <tbody onClick={handleRowClick}>
                {kategoriData.map((kategori, index) => (
                  <tr key={index}>
                    <td>{kategori.nama}</td>
                    <td>{kategori.kode}</td>
                    <td>{kategori.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default ViewKategori;
  