import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Footer } from 'react-materialize';
import Home from './HomeComponent';


export default class Main extends Component {

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                <Header/>
                <Home />
                <Footer
                    copyrights="&copy 2015 Copyright Text"
                    moreLinks={<a />}
                    links={<ul />}
                    className="blue-grey"
                >
                    <h5 className="white-text">
                        Footer Content
                    </h5>
                    <p className="grey-text text-lighten-4">
                        You can use rows and columns here to organize your footer content.
                    </p>
                </Footer>
            </div>
        )
    }
}