import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Routes } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FrontPage from './FrontPage/FrontPage';

const App = () => (
  <div>
    <BrowserRouter>
        <Routes>
          <Route path="/" exact>
            Missing Case Id
          </Route>
          <Route path="/caseId/:caseId" element={<FrontPage />} exact>
          </Route>
        </Routes>
    </BrowserRouter>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
