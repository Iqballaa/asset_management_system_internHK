import React, { useState } from "react";
import "../styles/tambahruas.css";

const Editruas = () => {
  const [namaRuas, setNamaRuas] = useState("");
  const [kodeRuas, setKodeRuas] = useState("");
  const [panjangRuas, setPanjangRuas] = useState("");
  const [lokasiRuas, setLokasiRuas] = useState("");
  const [jumlahCabang, setJumlahCabang] = useState("");
  const [idRuas, setIdRuas] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Tambahkan kode untuk menyimpan data yang diubah ke database atau state aplikasi
  };

  return (
    <div className="settings">
      <div className="settings__wrapper">
        <div className="details__form">
          <h2 className="profile__title">Edit Ruas</h2>
          <form onSubmit={handleSubmit}>
            <div className="form__group">
              <div>
                <label htmlFor="nama_ruas">Nama Ruas</label>
                <input
                  type="text"
                  id="nama_ruas"
                  placeholder=""
                  value={namaRuas}
                  onChange={(event) => setNamaRuas(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="kode_ruas">Kode Ruas</label>
                <input
                  type="text"
                  id="kode_ruas"
                  placeholder=""
                  value={kodeRuas}
                  onChange={(event) => setKodeRuas(event.target.value)}
                />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label htmlFor="panjang_ruas">Panjang Ruas</label>
                <input
                  type="text"
                  id="panjang_ruas"
                  placeholder=""
                  value={panjangRuas}
                  onChange={(event) => setPanjangRuas(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="lokasi_ruas">Lokasi Ruas</label>
                <input
                  type="text"
                  id="lokasi_ruas"
                  placeholder=""
                  value={lokasiRuas}
                  onChange={(event) => setLokasiRuas(event.target.value)}
                />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label htmlFor="jumlah_cabang">Jumlah Cabang</label>
                <input
                  type="text"
                  id="jumlah_cabang"
                  placeholder=""
                  value={jumlahCabang}
                  onChange={(event) => setJumlahCabang(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="id_ruas">ID Ruas</label>
                <input
                  type="text"
                  id="id_ruas"
                  placeholder=""
                  value={idRuas}
                  onChange={(event) => setIdRuas(event.target.value)}
                />
              </div>
            </div>

            <div className="form__group">
              <button className="update__btn">SIMPAN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editruas;
