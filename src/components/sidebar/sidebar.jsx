import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import HeartBrokenOutlinedIcon from '@mui/icons-material/HeartBrokenOutlined';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { database } from '../../pages/login/FirebaseConfig';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const history = useNavigate();
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='Sidebar'>
      <div className="top">
        <Link to="/home" style={{textDecoration:"none"}}>
        <span className="logo">Geekster Admin</span>
        </Link>
        </div>
      <hr />
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <Link to="/home" style={{textDecoration:"none"}}>
            <li>
            <DashboardIcon className="icon" />  
            <span>Dashboard</span>
            </li>
            </Link>
            <p className="title">WAREHOUSE</p>
            <Link to="/users" style={{textDecoration:"none"}}>
            <li>
            <Person4OutlinedIcon className="icon" />  
            <span>Users</span>
            </li>
            </Link>
            <Link to="/products" style={{textDecoration:"none"}}>
            <li>
            <MenuBookIcon className="icon" />  
            <span>Courses</span>
            </li>
            </Link>
            <Link to="/registrations" style={{textDecoration:"none"}}>
            <li>
            <HowToRegIcon className="icon" />  
            <span>Registrations</span>
            </li>
            </Link>
            <li>
            <CreditCardIcon className="icon" />  
            <span>Joinees</span>
            </li>
            <p className="title">USEFUL</p>
            <Link to="/stats" style={{textDecoration:"none"}}>
            <li>
            <AssessmentIcon className="icon" />  
            <span>Stats</span>
            </li>
            </Link>
            <li>
            <NotificationsActiveOutlinedIcon className="icon" />  
            <span>Notifications</span>
            </li>
            <p className="title">SYSTEM SETTINGS</p>
            <li>
            <HeartBrokenOutlinedIcon className="icon" />  
            <span>System Health</span>
            </li>
            <li>
            <PsychologyIcon className="icon" />  
            <span>Logs</span>
            </li>
            <li>
            <SettingsOutlinedIcon className="icon" />  
            <span>Settings</span>
            </li>
            <p className="title">PROFILE</p>
            <Link to="/profile" style={{textDecoration:"none"}}>
            <li>
            <AccountBoxIcon className="icon" />  
            <span>Profile</span>
            </li>
            </Link>
            <li>
            <LogoutIcon className="icon" />  
            <span onClick={()=>{
              signOut(database).then(val=>{
                history('/')
              })
            }}>Logout</span>
            </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions" onClick={()=> dispatch({type:"LIGHT"})}></div>
        <div className="colorOptions" onClick={()=> dispatch({type:"DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar
