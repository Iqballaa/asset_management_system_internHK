import React, { useEffect } from "react";
import "../styles/editinventori.css";

const Editinventori = () => {

  return (
    <div className="settings">
      <div className="settings__wrapper">
        <div className="details__form">
          <h2 className="profile__title">Tambah Inventori</h2>
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
                <label htmlFor="merk_asset">Merk Asset</label>
                <input type="text" id="merk_asset" placeholder="" />
              </div>

              <div>
                <label htmlFor="lokasi_gerbang">Lokasi Gerbang ( latitude, longtitude )</label>
                <input type="text" id="lokasi_gerbang" placeholder="Latitude, Longtitude" />
              </div>
            </div>
            <div className="form__group">
              <div>
                <label htmlFor="tanggal_terima">Tanggal Terima</label>
                <input type="text" id="tanggal_terima" placeholder="" />
              </div>
              <div>
                <label htmlFor="harga_perolehan">Harga Perolehan</label>
                <input type="text" id="harga_perolehan" placeholder="" />
              </div>
            </div>
            <div className="form__group">
              <div>
                <label htmlFor="batas_pemakaian">Batas Pemakaian</label>
                <input type="text" id="batas_pemakaian" placeholder="" />
              </div>
              <div>
                <label htmlFor="masa_manfaat">Masa Manfaat</label>
                <input type="text" id="nilai_penyusutan" placeholder="" />
              </div>
            </div>
            <div className="form__group">
              <div>
                <label htmlFor="waktu_penyusutan">Waktu Penyusutan</label>
                <input type="text" id="waktu_penyusutan" placeholder="" />
              </div>
              <div>
                <label htmlFor="kondisi_asset">Kondisi Asset</label>
                <input type="text" id="kondisi_asset" placeholder="" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label htmlFor="id_kodefikasi">ID Kodefikasi</label>
                <input type="text" id="id_kodefikasi" placeholder="" />
              </div>
              <div>
                <label htmlFor="id_inventori">ID Inventori</label>
                <input type="text" id="id_inventori" placeholder="" />
              </div>
            </div>
             <div>
                <label>Foto Asset</label>
                <p className="profile-img__desc">
                  Upload di sini.
                </p>
                <input type="file" placeholder="choose file" />
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

export default Editinventori;
