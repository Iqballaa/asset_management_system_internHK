import React from "react";
import "../styles/edituser.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <h2 className="settings__title">Settings</h2>

        <div className="details__form">
          <h2 className="profile__title">Profile</h2>
          <p className="profile__desc">
            Update foto dan data terbaru 
          </p>
          <form>
            <div className="form__group">
              <div>
                <label>Name</label>
                <input type="text" placeholder="Nama lengkap" />
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
              <div>
                <label>Foto Anda</label>
                <p className="profile-img__desc">
                  Upload di sini, sebagai foto profile mu
                </p>
                <input type="file" placeholder="choose file" />
              </div>

              <div className="profile__img-btns">
                <button className="dlt__btn">Delete</button>
                <button className="update__btn">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
