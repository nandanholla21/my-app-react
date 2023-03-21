import React, { Component } from 'react';
import { Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItem, Form, FormGroup, Label, Input } from 'reactstrap';

import { NavLink } from 'react-router-dom';
import {Button,Modal,ModalHeader,ModalBody} from 'reactstrap';
class Header extends Component {
        
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false,
            isModalOpen:false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen:!this.state.isNavOpen
        });
    }
    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }
    handleLogin(event){
        this.toggleModal();// with this after clicking ok on alert box the pop up modal closes
        alert("Username:" + this.username.value+" password "+this.password.value+" remeber "+this.remember.checked);
        event.preventDefault();
    }
    render() {
        
            return (
                <>
                    <Navbar dark expand="md">
                        <div className='container'>
                            <NavbarToggler onClick={this.toggleNav} />
                            <NavbarBrand className='mr-auto' href='/'>
                                <img src='assets/images/logo.png' height="30" width="41" alt='Hola mi amor'/>
                            </NavbarBrand>
                            <Collapse isOpen={this.state.isNavOpen}  navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            <Nav className='ml-auto' navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span>Login
                                    </Button>
                                </NavItem>
                            </Nav>
                            </Collapse>
                        </div>
                    </Navbar>


                    <div className='jumbotron'>
                        <div className='container'>
                            <div className='row row-header'>
                            <div className='col-12 col-sm-6'>
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience.</p>

                            </div>
                            </div>
                        </div>
                    </div>
                    {/* Modal is here */}
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader>Login</ModalHeader>
                        <ModalBody>
                            {/* uncontrolled form */}
                            <Form onSubmit={this.handleLogin}>
                                <FormGroup>
                                    <Label htmlFor='username'>
                                        Username
                                    </Label>
                                    <Input type='text' id='username' name='username' innerRef={(input) => this.username=input}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='password'>
                                        Password
                                    </Label>
                                    <Input type='password' id='password' name='password' innerRef={(input) => this.password=input} />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        Remember
                                    </Label>
                                    <Input type='checkbox' id='remember' name='remember' innerRef={(input) => this.remember=input}/>
                                </FormGroup>
                                <Button type='submit' value='submit' className='primary'>Login</Button>
                            </Form>
                        </ModalBody>
                    </Modal>

                </>
            );
        }
    }
export default Header;