import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fetch from './Fetch.js';
import { BrowserRouter, Route, Switch , Link, useParams } from 'react-router-dom';

function App() {
  return (
        <BrowserRouter>
    <div className="App">

    <Fetch />
    

   </div>
      </BrowserRouter>
  );
}

export default App;
