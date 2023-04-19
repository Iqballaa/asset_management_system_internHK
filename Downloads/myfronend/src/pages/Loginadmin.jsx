import React from "react";
import { Link } from "react-router-dom";
import "../styles/loginadmin.css";

const Loginadmin = ({ setIsLoggedIn }) => {
  return (
    <div className="loginadmin__container">
      <div className="loginadmin__wrapper">
        <div className="loginadmin__form">
          <h2 className="loginadmin__title">Form Login</h2>
          <form>
            <div className="loginadmin__form-group">
              <label className="loginadmin__label">Username</label>
              <input className="loginadmin__input" type="text" placeholder="username" />
            </div>

            <div className="loginadmin__form-group">
              <label className="loginadmin__label">Departemen</label>
              <input className="loginadmin__input" type="username" placeholder="Divisi/Cabang" />
            </div>

            <div className="loginadmin__form-group">
              <label className="loginadmin__label">Password</label>
              <input className="loginadmin__input" type="password" placeholder="********" />
            </div>

            <div className="loginadmin__form-group">
              <Link to="/dashboard">
                <button className="loginadmin__button" onClick={() => setIsLoggedIn(true)}>
                  Login
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginadmin;
