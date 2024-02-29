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
import { randomOrderNumber } from './components/helpers/utils';
import BankCard from './components/BankCard/BankCard';


export const App = () => {
  return (
    <Router>
      <div className="App overflow-hidden">
        <NavBarView />
        <Routes>
          <Route path='/' element={
            <MainView />
          }
          />
          <Route path=':title' element={
            <DetailsView />
          } />
          <Route path={`/order/${randomOrderNumber}`} element={
            < OrderView />
          } />
          <Route path={`/payment/${randomOrderNumber}`} element={
            <BankCard />
          } />
        </Routes>
      </div>
    </Router>
  );
}

