import "./single.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Charts from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">EDIT</div>
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
              </div>
            </div>
          </div>
          <div className="right">
            {" "}
            <Charts
              aspect={4 / 1}
              title="User transactions(last 6 months)"
            />{" "}
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Latest Registrations</h1>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Single;
