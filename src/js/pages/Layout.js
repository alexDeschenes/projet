import React from "react";
import { Link } from "react-router";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default class Layout extends React.Component{
    render(){
        console.log('WOW');
        console.log(this.props);
        const { location } = this.props;
        return(
            <div>
            <Nav location={location}/>
            {React.cloneElement(this.props.children, { Params: this.props.Params })}
            <Footer />
            </div>

        );
    }
}