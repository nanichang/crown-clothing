import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './components/shop/shop.component';
import Header from './components/header/header.component';
import AuthenticationPage from './pages/authentication/authentication.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path="/signin" component={AuthenticationPage} />
      </Switch>
    </div>
  );
}

export default App;
