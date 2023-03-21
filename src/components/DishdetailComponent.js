import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
class DishdetailComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.dish != null) {
            const comments = this.props.dish.comments;
            const authors = this.props.dish.authors;
            return (
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5 col-lg-5 col-sm-12 col-xs-12 spaci'>
                            <Card>
                                <CardImg src={this.props.dish.image} alt={this.props.dish.name} />
                                <CardBody>
                                    <CardTitle><h4>{this.props.dish.name}</h4></CardTitle>
                                    <CardText><h4>{this.props.dish.description}</h4></CardText>
                                </CardBody>
                            </Card>
                        </div>
                        
                        <div className='col-md-5 col-lg-5 col-sm-12 col-xs-12 spaci'>
                            <h1>Comments</h1>
                            <br/>
                            <br/>
                            <dl className='list1'>  
                                {/* Description list is used for better view */}
                                {comments.map((item,index) => (
                                    <div>
                                        <dt key={index}><h4>{item}</h4></dt>
                                        <dd key={index}>{authors[index]}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className='row'></div>
            );
        }
    }
}
export default DishdetailComponent;