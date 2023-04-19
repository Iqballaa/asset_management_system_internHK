import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Inventori = () => {
  const [ruasData, setRuasData] = useState([    {
    namaGerbang: "Gerbang A",
    kodeGerbang: "GA",
    merkAsset: "Merk A", // add missing property
    tanggalTerimaAsset: "2023-04-03", // add missing property
    lokasiAsset: "Lokasi A", // add missing property
    hargaPerolehan:"1000000000",
    batasPemakaian: "2025-04-03", // add missing property
    masaManfaat: "10000000", // add missing property
    waktuPenyusutan: "5", // add missing property
    kondisiAsset: "Baik", // add missing property
    fotoFisik: "Foto A", // add missing property
    idKodefikasi: "001AA",
    idInventori: "001",
  },
  {
    namaGerbang: "Gerbang B",
    kodeGerbang: "GB",
    merkAsset: "Merk B", // add missing property
    tanggalTerimaAsset: "2023-04-03", // add missing property
    lokasiAsset: "Lokasi B", // add missing property
    hargaPerolehan:"1000000000",
    batasPemakaian: "2025-04-03", // add missing property
    masaManfaat: "20000000", // add missing property
    waktuPenyusutan: "7", // add missing property
    kondisiAsset: "Rusak", // add missing property
    fotoFisik: "Foto B", // add missing property
    idKodefikasi: "002BB",
    idInventori: "002",
  },
  {
    namaGerbang: "Gerbang C",
    kodeGerbang: "GC",
    merkAsset: "Merk C", // add missing property
    tanggalTerimaAsset: "2023-04-03", // add missing property
    lokasiAsset: "Lokasi C", // add missing property
    hargaPerolehan:"1000000000",
    batasPemakaian: "2025-04-03", // add missing property
    masaManfaat: "30000000", // add missing property
    waktuPenyusutan: "10", // add missing property
    kondisiAsset: "Baik", // add missing property
    fotoFisik: "Foto C", // add missing property
    idKodefikasi: "003CC",
    idInventori: "003",
  }, ]);

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
          <h2 className="mt-4 mb-4">Manajemen Inventori</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          <Link to="/tambahinventori" className="btn btn-primary">
            Tambah Inventori
          </Link>
        </div>
        <div className="col-12">
          <table className="table">
            <thead className="table-dark">
            <tr>
                <th>Nama Gerbang</th>
                <th>Kode Gerbang</th>
                <th>Merk Asset</th>
                <th>Tanggal Terima</th>
                <th>Lokasi Asset</th>
                <th>Harga Perolehan</th>
                <th>Batas Pemakaian</th>
                <th>Masa Manfaat</th>
                <th>Waktu Penyusutan</th>
                <th>Kondisi Asset</th>
                <th>Foto Fisik </th>
                <th>Id Kodefikasi</th>
                <th>Id Inventori</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody onClick={handleRowClick}>
              {ruasData.map((inventori, index) => (
                <tr key={index}>
                  <td>{inventori.namaGerbang}</td>
                  <td>{inventori.kodeGerbang}</td>
                  <td>{inventori.merkAsset}</td>
                  <td>{inventori.tanggalTerimaAsset}</td>
                  <td>{inventori.lokasiAsset}</td>
                  <td>{inventori.hargaPerolehan}</td>
                  <td>{inventori.batasPemakaian}</td>
                  <td>{inventori.masaManfaat}</td>
                  <td>{inventori.waktuPenyusutan}</td>
                  <td>{inventori.kondisiAsset}</td>
                  <td>{inventori.fotoFisik}</td>
                  <td>{inventori.idKodefikasi}</td>
                  <td>{inventori.idInventori}</td>
                 
                  <td>
                    <div className="btn-group" role="group">
                      <Link to="/viewinventori">
                        <button type="button" className="btn btn-sm btn-primary mr-2">
                          <FontAwesomeIcon icon={faEye} className="action-icon" />
                      </button>
                       </Link>
                      <Link to="/editinventori">
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

export default Inventori;
