import React from "react";
import ReactDOM from "react-dom";
import Content from "./Content/Content";
import Header from "./Header/Header";
import "./index.css";
import Navbar from "./Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <Header/>
    <div className="flex">
      <Navbar />
      <Content />
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
