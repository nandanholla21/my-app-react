import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import { Navbar, NavbarBrand,Jumbotron } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { BrowserRouter } from 'react-router-dom';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route,Redirect} from 
'react-router-dom';
import Contact from './contactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import About from './aboutComponent';
class Main extends Component {
    constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments:COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS
    };
  }
  
  render() {
    const HomePage = () =>{
        return (
            <Home dish={this.state.dishes.filter((dish) =>dish.featured == true )[0]} 
            promotion={this.state.promotions.filter((promo) => promo.featured==true)[0]}
            leader={this.state.leaders.filter((leader)=> leader.featured == true)[0]}
            />

        );
    };
    // const contactUs = () => {
    //     return (
    //         <Contact />
    //     );
    // };
    return (
        <div>
          <Header />
          {/* <div className='row'>
            <Menu dishes={this.state.dishes} />
          </div> */}
          <Switch>
            <Route path='/home' component={HomePage} />
            <Route path='/menu' component={() =><Menu dishes={this.state.dishes} /> } />
            <Route path='/contactus' component={Contact} />
            <Route path='/aboutus' component={()=> <About leaders={this.state.leaders}/> } />
            <Redirect to="/home" />
          </Switch>
          <Footer/>
        </div>

    );
  }
}

export default Main;
