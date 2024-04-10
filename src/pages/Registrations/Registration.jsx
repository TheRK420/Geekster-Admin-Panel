import "./registration.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Table from "../../components/table/Table";

const Registration = () => {
  return (
    <div className="reg">
      <Sidebar />
      <div className="regContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">Latest Registrations</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Registration;
