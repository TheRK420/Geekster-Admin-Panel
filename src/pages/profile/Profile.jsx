import "./profile.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";

const Profile = () => {
  return (
    <div className="profile">
        <Sidebar/>
      <div className="profilecontainer">
        <Navbar/>
        <div className="left">
          <h1 className="title">Information</h1>
          <div className="item">
            <img
              src="https://files.shapes.inc/5cae577a.png"
              alt=""
              className="itemimg"
            />
            <div className="details">
              <h1 className="itemTitle">Sourasish Sengupta</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">rikrrr4345@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+91 7001694096</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">Asansol,WB</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">India</span>
              </div>
              <div className="editButton">EDIT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
