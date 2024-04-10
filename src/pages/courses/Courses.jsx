import './courses.scss';
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import CourseDatasource from '../../components/coursesData/courseData';


const Courses = () => {
  return (
    <div className='course'> 
      <Sidebar/>
      <div className="courseContainer">
        <Navbar/>
        <CourseDatasource/>
      </div>
    </div>
  )
}

export default Courses