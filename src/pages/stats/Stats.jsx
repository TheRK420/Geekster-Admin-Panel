import './stats.scss';
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Charts from "../../components/chart/Chart";
import Pie from "../../components/pie/pie"

const Stats = () => {
  return (
    <div className='stats'>
      <Sidebar/>
      <div className="statsContainer">
        <Navbar/>
        <div className="top">
            <span className="title">Annual Statistics</span>
        </div>
        <div className="middle">
            <div className="left">
                <Pie/>
            </div>
            <div className="right">
                <Charts aspect={2/0.82} title="Last 6 months revenue"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
