import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";
import MileChart from "../charts/MileChart";
import CarStatsChart from "../charts/CarStatsChart";
import "../styles/kodefikasi.css";

const carObj = {
  title: "Total Asset",
  totalNumber: 750,
  icon: "ri-police-car-line",
};

const tripObj = {
  title: "Asset Baru di tambahkan",
  totalNumber: 97,
  icon: "ri-steering-2-line",
};

const clientObj = {
  title: "Jumlah User",
  totalNumber: "85",
  icon: "ri-user-line",
};

const distanceObj = {
  title: "Daerah Sebaran Asset",
  totalNumber: 167,
  icon: "ri-timer-flash-line",
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Miles Statistics</h3>
            <MileChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Asset Statistics</h3>
            <CarStatsChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
