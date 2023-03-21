import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
import Menu from './components/MenuComponent';
import DishdetailComponent from './components/DishdetailComponent';
import { DISHES } from './shared/dishes';
import { BrowserRouter } from 'react-router-dom';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Main from './components/MainComponent';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main />
     </BrowserRouter>
    );
  }
}

export default App;
