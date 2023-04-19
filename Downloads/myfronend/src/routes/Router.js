import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import User from "../pages/User";
import Kodefikasi from "../pages/Kodefikasi";
import Inventori from "../pages/Inventori";
import Edituser from "../pages/Edituser";
import Tambahuser from "../pages/Tambahuser";
import Loginadmin from "../pages/Loginadmin";
import Masterruas from "../pages/Masterruas";
import Mastergerbang from "../pages/Mastergerbang";
import Masterkategori from "../pages/Masterkategori";
import Mastersubkategori from "../pages/Mastersubkategori";
import Tambahruas from "../pages/Tambahruas";
import Tambahgerbang from "../pages/Tambahgerbang";
import Tambahkategori from "../pages/Tambahkategori";
import Tambahsubkategori from "../pages/Tambahsubkategori";
import Tambahkodefikasi from "../pages/Tambahkodefikasi";
import Tambahinventori from "../pages/Tambahinventori";
import Gis from "../pages/Gis";
import Editruas from "../pages/Editruas";
import Editgerbang from "../pages/Editgerbang";
import Editkategori from "../pages/Editkategori";
import Editsubkategori from "../pages/Editsubkategori";
import Editinventori from "../pages/Editinventori";
import Editkodefikasi from "../pages/Editkodefikasi";
import Viewruas from "../pages/Viewruas";
import Viewgerbang from "../pages/Viewgerbang";
import Viewkategori from "../pages/Viewkategori";
import Viewsubkategori from "../pages/ViewSubkategori";
import Viewuser from "../pages/Viewuser";
import Viewinventori from "../pages/Viewinventori";
import Viewkodefikasi from "../pages/Viewkodefikasi";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Loginadmin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/user" element={<User />} />
      <Route path="/datamaster/masterruas" element={<Masterruas />} />
      <Route path="/datamaster/mastergerbang" element={<Mastergerbang />} />
      <Route path="/datamaster/masterkategori" element={<Masterkategori />} />
      <Route path="/datamaster/mastersubkategori" element={<Mastersubkategori />} />
      <Route path="/kodefikasi" element={<Kodefikasi />} />
      <Route path="/inventori" element={<Inventori />} />
      <Route path="/edituser" element={<Edituser />} />
      <Route path="/tambahuser" element={<Tambahuser />} />
      <Route path="/loginadmin" element={<Loginadmin />} />
      <Route path="/tambahruas" element={<Tambahruas />} />
      <Route path="/tambahgerbang" element={<Tambahgerbang />} />
      <Route path="/tambahkategori" element={<Tambahkategori />} />
      <Route path="/tambahsubkategori" element={<Tambahsubkategori />} />
      <Route path="/tambahkodefikasi" element={<Tambahkodefikasi />} />
      <Route path="/tambahinventori" element={<Tambahinventori />} />
      <Route path="/gis" element={<Gis />} />
      <Route path="/editruas" element={<Editruas />} />
      <Route path="/editgerbang" element={<Editgerbang />} />
      <Route path="/editkategori" element={<Editkategori />} />
      <Route path="/editsubkategori" element={<Editsubkategori />} />
      <Route path="/editinventori" element={<Editinventori />} />
      <Route path="/editkodefikasi" element={<Editkodefikasi />} />
      <Route path="/viewruas" element={<Viewruas />} />
      <Route path="/viewgerbang" element={<Viewgerbang />} />
      <Route path="/viewkategori" element={<Viewkategori />} />
      <Route path="/viewsubkategori" element={<Viewsubkategori />} />
      <Route path="/viewuser" element={<Viewuser />} />
      <Route path="/viewinventori" element={<Viewinventori />} />
      <Route path="/viewkodefikasi" element={<Viewkodefikasi />} />
    </Routes>
  );
};

export default Router;
