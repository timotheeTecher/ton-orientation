//Libraries
import React from 'react';
import './App.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Home from './Containers/Home/Home';

//Config
import routes from "./config/routes/routes";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={routes.HOME} element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
