import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Registration from "./pages/auth/Registration";
import Login from "./pages/auth/Login";

function App() {
  return (
    <Routes>
        <Route path='/' element={<div>Привет</div>}/>
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login/>}/>
    </Routes>
  );
}

export default App;
