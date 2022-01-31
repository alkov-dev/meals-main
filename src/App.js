import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import "antd/dist/antd.css";




const App = () => {


  return (
    <div>
        <BrowserRouter>
          <Header />
          <AppRouter />
        </BrowserRouter>
    </div>

    );
  }

  export default App;
