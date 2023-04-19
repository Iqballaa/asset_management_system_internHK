import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import navLinks from "../../assets/dummy-data/navLinks";
import "./sidebar.css";

const Sidebar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const modifiedNavLinks = navLinks.map((item) => {
    if (item.display === "Datamaster") {
      return {
        ...item,
        submenu: item.submenu.map((subitem) => {
          if (subitem.display === "Master Ruas") {
            return {
              ...subitem,
              to: subitem.path
            };
          } if (subitem.display === "Master Gerbang") {
            return {
              ...subitem,
              to: subitem.path
            };
          }
          if (subitem.display === "Master Kategori") {
            return {
              ...subitem,
              to: subitem.path
            };
          }
          if (subitem.display === "Master Subkategori") {
            return {
              ...subitem,
              to: subitem.path
            };
          }
          return subitem;
        })
      };
    }
    return item;
  });

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2>
          <span>
            <img
              src="https://play-lh.googleusercontent.com/dIrzstTsOSwawoFFlAS6BYX3sascGcBNgfE1k7QrNAogPlMVmO9a5p2LcTwu2OCMchoS"
              className="logo"
              alt="logo.png"
            />
          </span>{" "}
          assetOPJT
        </h2>
      </div>

      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {modifiedNavLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                {item.submenu ? (
                  <div
                    className={`nav__link nav__submenu ${
                      showSubMenu ? "active" : ""
                    }`}
                    onClick={toggleSubMenu}
                  >
                    <i
                      className={item.icon}
                      style={{ marginRight: "10px" }}
                    ></i>
                    {item.display}
                    <i className="ri-arrow-down-s-line submenu__icon"></i>
                    <ul className="nav__submenu-list">
                      {item.submenu.map((subitem, subindex) => (
                        <li key={subindex}>
                          <NavLink
                            to={subitem.to}
                            activeClassName="nav__active"
                          >
                            {subitem.display}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    activeClassName="nav__active"
                    className="nav__link"
                  >
                    <i className={item.icon}></i>
                    {item.display}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar__bottom">
          <Link to="/loginadmin">
            <i className="ri-logout-circle-r-line"></i> Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
