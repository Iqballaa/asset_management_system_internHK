import "../styles/viewuser.css";
import ProfilePicture from "../assets/profile.png";

const Viewuser = () => {
  return (
    <div className="view-user">
      <div className="profile-picture-container">
        <img src={ProfilePicture} alt="Profile Picture" />
      </div>
      <div className="user-info">
        <h1>User Profile</h1>
        <div className="info-group">
          <label>Nama Lengkap:</label>
          <span>Saefull Millah</span>
        </div>
        <div className="info-group">
          <label>Username:</label>
          <span>saeful456</span>
        </div>
        <div className="info-group">
          <label>Departemen:</label>
          <span>OPJT</span>
        </div>
        <div className="info-group">
          <label>User Level:</label>
          <span>Divisi</span>
        </div>
        <div className="info-group">
          <label>Nama Ruas:</label>
          <span>Terpeka</span>
        </div>
      </div>
    </div>
  );
};

export default Viewuser;
