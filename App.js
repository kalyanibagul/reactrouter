import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Register from './component/Register';
import Navbar from './component/Navbar';
import Notfound from './component/Notfound';
import Shopping from './component/Shopping';

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
        <Routes>
            <Route  exact path = '/' element = {<Home/>}></Route>
            <Route path = '/dashboard' element = {<Dashboard/>}></Route>
            <Route path = '/login' element = {<Login/>}></Route>
            <Route path = '/register' element = {<Register/>}></Route>
            <Route path = '/shopping' element = {<Shopping/>}></Route>
            <Route path = '/notfound' element = {<Notfound/>}></Route>
        </Routes>     
      
    </div>
  );
}

export default App

