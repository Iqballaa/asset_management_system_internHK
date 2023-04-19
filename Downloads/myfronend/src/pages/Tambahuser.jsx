import React from "react";
import "../styles/tambahuser.css";

const Tambahuser = () => {
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <div className="details__form">
          <h2 className="profile__title">Tambah User</h2>
          <form>
            <div className="form__group">
              <div>
                <label>Name</label>
                <input type="text" placeholder="Nama lengakap" />
              </div>

              <div>
                <label>User Level</label>
                <input type="text" placeholder="contohnya;Admin,Divisi,Cabang" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Username</label>
                <input type="text" placeholder="contoh123" />
              </div>

              <div>
                <label>Password</label>
                <input type="text" placeholder="*******" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Departemen</label>
                <input type="text" placeholder="contoh:OPJT" />
              </div>

              <div>
                <label>Konfirmasi Password</label>
                <input type="text" placeholder="********" />
              </div>
            </div>

            <div className="form__group">
              <div className="profile__img-btns">
                <button className="update__btn">SIMPAN</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tambahuser;
