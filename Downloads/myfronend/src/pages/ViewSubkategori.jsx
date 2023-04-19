import React, { useState } from "react";
import { Link } from "react-router-dom";

const ViewSubkategori = () => {
  // Define initial subkategori data using useState hook
  const [subkategoriData, setSubkategoriData] = useState([
    {
      nama: "Gerbang A",
      kode: "GA",
      id_subkategori: 1,
      id_kategori: 12,
    },
  ]);

  // Function to handle row click event
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

  // Function to handle delete button click event
  const handleDelete = (index) => {
    const newSubkategoriData = [...subkategoriData];
    newSubkategoriData.splice(index, 1);
    setSubkategoriData(newSubkategoriData);
  };

  const handleDownload = (index) => {
    console.log("Downloading subkategori data:", subkategoriData[index]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="mt-4 mb-4">View Subkategori</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>Nama Subkategori</th>
                <th>Kode Subkategori</th>
                <th>ID Subkategori</th>
                <th>ID Kategori</th>
              </tr>
            </thead>
            <tbody onClick={handleRowClick}>
              {/* Map through subkategoriData and display each item */}
              {subkategoriData.map((subkategori, index) => (
                <tr key={subkategori.id_subkategori}>
                  <td>{subkategori.nama}</td>
                  <td>{subkategori.kode}</td>
                  <td>{subkategori.id_subkategori}</td>
                  <td>{subkategori.id_kategori}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewSubkategori;
