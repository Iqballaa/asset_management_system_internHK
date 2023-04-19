import React, { useEffect } from "react";
import "../styles/editkodefikasi.css";

const Editkodefikasi = () => {

  return (
    <div className="settings">
      <div className="settings__wrapper">
        <div className="details__form">
          <h2 className="profile__title">Edit Kodefikasi</h2>
          <form>
            <div className="form__group">
              <div>
                <label htmlFor="nama_gerbang">Nama Gerbang</label>
                <input type="text" id="nama_gerbang" placeholder="" />
              </div>

              <div>
                <label htmlFor="kode_gerbang">Kode Gerbang</label>
                <input type="text" id="kode_gerbang" placeholder="" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label htmlFor="nama_kategori">Nama Kategori</label>
                <input type="text" id="nama_kategori" placeholder="" />
              </div>
              <div>
                <label htmlFor="kode_kategori">Kode Kategori</label>
                <input type="text" id="kode_kategori" placeholder="" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label htmlFor="nama_subkategori">Nama Subkategori</label>
                <input type="text" id="nama_subkategori" placeholder="" />
              </div>
              <div>
                <label htmlFor="kode_subkategori">Kode Subkategori</label>
                <input type="text" id="kode_subkategori" placeholder="" />
              </div>
            </div>
            <div className="form__group">
            <div>
                <label htmlFor="nama_ruas">Nama Ruas</label>
                <input type="text" id="nama_ruas" placeholder="" />
              </div>

              <div>
                <label htmlFor="kode_ruas">Kode Ruas</label>
                <input type="text" id="kode_ruas" placeholder="" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label htmlFor="id_subkategori">ID Subkategori</label>
                <input type="text" id="id_subkategori" placeholder="" />
              </div>
              <div>
                <label htmlFor="id_gerbang">ID Gerbang</label>
                <input type="text" id="id_gerbang" placeholder="" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label htmlFor="id_kodefikasi">ID Kodefikasi</label>
                <input type="text" id="id_kodefikasi" placeholder="" />
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

export default Editkodefikasi;
