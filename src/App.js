import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Courses from "./pages/courses/Courses";
import Registration from "./pages/Registrations/Registration";
import Profile from "./pages/profile/Profile"
import {Routes,Route,BrowserRouter} from "react-router-dom";
import { userInputs,productInputs } from "./formsource";
import "./style/dark.scss"
import { useContext, useState } from "react";
import { DarkModeContext } from "./components/context/darkModeContext";

function App() {
  const {darkMode} = useContext(DarkModeContext);
  
  return (
    <div className= {darkMode ? "App dark" : "App"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>} />
              <Route path="new" element={<New inputs={userInputs} title="Add new User" />} />
            </Route>
            <Route path="products">
              <Route index element={<Courses/>}/>
              <Route path=":productId" element={<Single/>} />
              <Route path="new" element={<New inputs={productInputs} title="Add new Course"/>} />
            </Route>
            <Route path="registrations" element={<Registration/>} />
            <Route path="profile" element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
