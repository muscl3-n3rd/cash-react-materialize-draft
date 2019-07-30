import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
export default class Header extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <Navbar className="blue-grey" brand={<a />} alignLinks="right">
                    <NavItem href="#">
                        Home
                    </NavItem>
                    <NavItem href="#">
                        About Us
                    </NavItem>
                </Navbar>
            </React.Fragment>
        )
    }
}