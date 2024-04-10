import "./home.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Widget from "../../components/widgets/widget"
import Featured from "../../components/featured/Featured"
import Charts from "../../components/chart/Chart"
import Table from "../../components/table/Table"

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured/>
          <Charts aspect={3/1} title="Last 6 months revenue"/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Registrations</div>
          <Table/>
        </div>
      </div>
    </div>
  );
};

export default Home;
