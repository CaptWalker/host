import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Content from "./Content/Content";
import Header from "./Header/Header";
import "./index.css";
import Navbar from "./Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [access, setAccess] = useState([]);
  useEffect(() => {
  }, [access])
  
  return (
    <div>
      <Header setAccess={setAccess}/>
      <div className="flex">
        <Navbar access={access}/>
        <Content access={access} />
      </div>
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
