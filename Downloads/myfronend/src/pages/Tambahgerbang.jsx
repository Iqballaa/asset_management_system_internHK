import React from "react";
import "../styles/tambahgerbang.css";

const Tambahgerbang = () => {
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <div className="details__form">
          <h2 className="profile__title">Tambah Gerbang</h2>
          <form>
            <div className="form__group">
              <div>
                <label htmlFor="nama">Nama Gerbang</label>
                <input type="text" id="nama" placeholder="Enter Nama Gerbang" />
              </div>

              <div>
                <label htmlFor="kode">Kode Gerbang</label>
                <input type="text" id="kode" placeholder="Enter Kode Gerbang" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label htmlFor="lokasi">Lokasi Gerbang</label>
                <input type="text" id="lokasi" placeholder="Enter Lokasi Gerbang" />
              </div>

              <div>
                <label htmlFor="id_ruas">ID Ruas</label>
                <input type="text" id="id_ruas" placeholder="Enter ID Ruas" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label htmlFor="id_gerbang">ID Gerbang</label>
                <input type="text" id="id_gerbang" placeholder="Enter ID Gerbang" />
              </div>
            </div>

            <div className="form__group">
                <button type="submit" className="update__btn">SIMPAN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tambahgerbang;
