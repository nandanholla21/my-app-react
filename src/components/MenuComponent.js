import React, { Component } from 'react';
import { Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Jumbotron } from 'reactstrap';
import DishdetailComponent from './DishdetailComponent';
import 'bootstrap/dist/css/bootstrap.min.css'; 
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state ={
          selectedDish:null
        };
    }

    onDishSelect(dish){
      this.setState({
        selectedDish:dish
      });
    }
    renderDish(dish){
      if(dish!=null){
        return (
          <Card>
            <CardImg  width="10%" height="50%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        );
      }
      else{
        return (
          <div className='row'></div>
        );
      }
    }
    render() {
        
      const menu = this.props.dishes.map((dish) => {
            return (
              <div className="col-lg-5 col-md-5 spaci">
                <Card  key={dish.id}  onClick={() => this.onDishSelect(dish)}>
                    <CardImg className='image' src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle><h4>{dish.name}</h4></CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
              
            );
        });
        const value = <DishdetailComponent dish={this.state.selectedDish}/>
        return (
          <div className="container">
            <div className="row">
              <div className='samp'>
                  {menu}
             </div>
              {/* {this.renderDish(this.state.selectedDish)}  */}
              {value}
          </div>
          </div>
          
        );
    }
}

export default Menu;