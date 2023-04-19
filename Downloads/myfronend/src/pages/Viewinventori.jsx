import React, { useState } from "react";


const  Viewinventori = () => {
  const [ruasData, setRuasData] = useState([    {
    namaGerbang: "Gerbang A",
    kodeGerbang: "GA",
    merkAsset: "Merk A", 
    tanggalTerimaAsset: "2023-04-03", 
    lokasiAsset: "Lokasi A", 
    hargaPerolehan:"1000000000",
    batasPemakaian: "2025-04-03",
    masaManfaat: "5", 
    waktuPenyusutan: "2021", 
    kondisiAsset: "Baik", 
    fotoFisik: "Foto A", 
    idKodefikasi: "001AA",
    idInventori: "001",
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
          <h2 className="mt-4 mb-4">View Inventori</h2>
        </div>
      </div>
      <div className="row">
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default  Viewinventori;
