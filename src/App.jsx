import React from "react";
import ReactDOM from "react-dom";
import AIC from 'AdditionalInformationCapability/AIC';
import KycCapability from 'KycCapability/KycCapability';

import "./index.css";

const App = () => (
  <div>
    <h1>Header</h1>
    <AIC />
    <KycCapability />

  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
