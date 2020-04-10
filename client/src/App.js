import React , { Component } from 'react';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';

import 'bootstrap/dist/css/bootstrap.min.css/';
import './App.css';
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar />
        <ShoppingList />
      </div>
    );
  }
}
