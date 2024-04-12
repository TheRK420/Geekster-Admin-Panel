import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Courses from "./pages/courses/Courses";
import Registration from "./pages/Registrations/Registration";
import Profile from "./pages/profile/Profile";
import Stats from "./pages/stats/Stats"
import {Routes,Route,BrowserRouter, Navigate} from "react-router-dom";
import { userInputs,productInputs } from "./formsource";
import "./style/dark.scss"
import { useContext, useState } from "react";
import { DarkModeContext } from "./components/context/darkModeContext";
import { AuthContext } from "./components/context/AuthContext";

function App() {
  const {darkMode} = useContext(DarkModeContext);

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({children})=>{
    return currentUser ? (children) : <Navigate to ="/"/>;
  };

  console.log(currentUser);
  
  return (
    <div className= {darkMode ? "App dark" : "App"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login/>}/>
            <Route path="home" element={<RequireAuth><Home/></RequireAuth>}/>
            <Route path="users">
              <Route index element={<RequireAuth><List/></RequireAuth>}/>
              <Route path=":userId" element={<RequireAuth><Single/></RequireAuth>} />
              <Route path="new" element={<RequireAuth><New inputs={userInputs} title="Add new User" /></RequireAuth>} />
            </Route>
            <Route path="products">
              <Route index element={<RequireAuth><Courses/></RequireAuth>}/>
              <Route path=":productId" element={<RequireAuth><Single/></RequireAuth>} />
              <Route path="new" element={<RequireAuth><New inputs={productInputs} title="Add new Course"/></RequireAuth>} />
            </Route>
            <Route path="registrations" element={<RequireAuth><Registration/></RequireAuth>} />
            <Route path="profile" element={<RequireAuth><Profile/></RequireAuth>} />
            <Route path="stats" element={<RequireAuth><Stats/></RequireAuth>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;