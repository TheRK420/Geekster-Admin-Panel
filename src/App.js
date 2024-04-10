import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
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
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>} />
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>} />
              <Route path="new" element={<New inputs={userInputs} title="Add new User" />} />
            </Route>
            <Route path="products">
              <Route index element={<List/>}/>
              <Route path=":productId" element={<Single/>} />
              <Route path="new" element={<New inputs={productInputs} title="Add new Product"/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
