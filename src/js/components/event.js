import React from "react";
import { Link } from "react-router";


export default class Events extends React.Component{
    render(){
        const { name } = this.props;
        const { title } = this.props;
        return(
            <li>
                <Link to ={"Photos/"+title} className="LesEvents" >
                <img className="photoGal" src={"../photos/"+name} alt=""/>
                <p className="EventsTitle">title</p></Link>
            </li>

          
        );
    }
}