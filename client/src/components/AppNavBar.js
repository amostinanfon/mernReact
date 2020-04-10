import React , { Component } from 'react';

import { 
    Collapse, 
    Navbar, 
    NavbarToggler, 
    NavbarBrand,  
    NavItem, 
    NavLink, 
    Container } from 'reactstrap';
export default class AppNavBar extends Component {

             state = {
                isOpen: false
            }

        toggle = () => {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
        render() {
            return(
                <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">ShoppingList</NavbarBrand>
                        <NavbarToggler onClick={this.toogle}/>
                    </Container>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https:github.com/amostinanfon">
                                    Github
                                </NavLink>
                            </NavItem>
                        </nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}