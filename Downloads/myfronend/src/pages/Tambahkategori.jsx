import React from "react";
import "../styles/tambahkategori.css";

const Tambahkategori = () => {
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <div className="details__form">
          <h2 className="profile__title">Tambah Kategori</h2>
          <form>
            <div className="form__group">
              <div>
                <label htmlFor="nama">Nama Kategori</label>
                <input type="text" id="nama" placeholder="" />
              </div>

              <div>
                <label htmlFor="kode">Kode Kategori</label>
                <input type="text" id="kode" placeholder="" />
              </div>
            </div>

            <div className="form__group">

              <div>
                <label htmlFor="id_ruas">ID Kategori</label>
                <input type="text" id="id_ruas" placeholder="" />
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

export default Tambahkategori;
