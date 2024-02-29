import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { NavBarView } from './pages/navbar/NavBarView';
import { MainView } from './pages/main-page/MainView';
import { DetailsView } from './pages/details-page/DetailsView';
import { OrderView } from './pages/order-page/OrderView';

export const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBarView />
        <Routes>
          <Route path='/' element={
            <MainView />
          }
          />
          <Route path=':title' element={
            <DetailsView />
          } />
          <Route path='/order' element={
            <OrderView />
          } />
        </Routes>
      </div>
    </Router>
  );
}

