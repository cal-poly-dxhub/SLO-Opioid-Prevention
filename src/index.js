import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'; 
import './index.css';
import Navbar from './components/Nav/Navbar';
import Home from './pages/Home'; 
import PreventOverdose from './pages/PreventOverdose'; 
import OverdoseResponse from './pages/OverdoseResponse'; 
import PublicResources from './pages/PublicResources'; 
import reportWebVitals from './reportWebVitals';
import GoodSamaritanLaw from './pages/GoodSamaritanLaw';
import './custom.scss';
import OrderForm from './pages/OrderForm';
import OrderConfirmationCard from './components/OrderConfirmationCard';
import NaloxoneFAQs from './pages/NaloxoneFAQs';
import PharmacyFinder from './pages/PharmacyFinder';

ReactDOM.render(
  <div className="App">
    <Router>
      <Navbar />
      <Switch>
          <Route path='/' exact={true}>
            <Home /> 
          </Route>
      </Switch>
      <Switch>
        <Route path='/prevent-overdose' exact={true}>
          <PreventOverdose />
        </Route>
      </Switch>
      <Switch>
        <Route path='/overdose-response' exact={true}>
          <OverdoseResponse />
        </Route>
      </Switch>
      <Switch>
        <Route path='/public-resources' exact={true}>
          <PublicResources />
        </Route>
      </Switch>
      <Switch>
        <Route path='/good-samaritan' exact={true}>
          <GoodSamaritanLaw /> 
        </Route>
      </Switch>
      <Switch>
        <Route path='/delivery-form' exact={true}>
          <OrderForm /> 
        </Route>
      </Switch>
      <Switch>
        <Route path='/delivery-confirm' exact={true}>
          <OrderConfirmationCard /> 
        </Route>
      </Switch>
      <Switch>
        <Route path='/faqs' exact={true}>
          <NaloxoneFAQs /> 
        </Route>
      </Switch>
      <Switch>
        <Route path='/pharmacy-finder' exact={true}>
          <PharmacyFinder /> 
        </Route>
      </Switch>
    </Router>

  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
