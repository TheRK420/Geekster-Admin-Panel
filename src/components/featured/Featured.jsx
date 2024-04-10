import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        < MoreVertOutlinedIcon fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
            <CircularProgressbar value={70} text='70%' strokeWidth={5}/>
        </div>
        <p className="title">Total sales made  today</p>
        <p className="amount">₹1.25L</p>
        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, tempora!</p>
        <div className="summary">
            <div className="item">
                <div className="itemTitle">Last Week</div>
                <div className="itemResult positive">
                    <KeyboardArrowUpIcon fontSize='small'/>
                    <div className="itemAmount">₹5.6L</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last Month</div>
                <div className="itemResult negative">
                    <KeyboardArrowDownIcon fontSize='small'/>
                    <div className="itemAmount">₹10L</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last Year</div>
                <div className="itemResult positive">
                    <KeyboardArrowUpIcon fontSize='small'/>
                    <div className="itemAmount">₹2.3Cr</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
