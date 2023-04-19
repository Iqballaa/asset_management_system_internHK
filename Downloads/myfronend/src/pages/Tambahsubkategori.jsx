import React from "react";
import "../styles/tambahsubkategori.css";

const Tambahsubkategori = () => {
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <div className="details__form">
          <h2 className="profile__title">Tambah Subkategori</h2>
          <form>
            <div className="form__group">
              <div>
                <label htmlFor="subkategori">Nama Subkategori</label>
                <input type="text" id="subkategori" placeholder="" />
              </div>

              <div>
                <label htmlFor="kode">Kode Subkategori</label>
                <input type="text" id="kode" placeholder="" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label htmlFor="lokasi">ID Kategori</label>
                <input type="text" id="lokasi" placeholder="" />
              </div>

              <div>
                <label htmlFor="id_ruas">ID Subkategori</label>
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

export default Tambahsubkategori;
