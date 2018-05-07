import React from "react";
import { Link } from "react-router";


export default class Team extends React.Component{
    render(){
        const { photo } = this.props;
        const { name } = this.props;
        console.log(photo);
        console.log(name);
        
        const { id } = this.props;
        return(
            <li>
                <Link to ={"Equipes/"+id} >
                <img className="photoGal" src={"../photos/"+photo} alt=""/>
                <p className="EventsTitle">{name}</p></Link>
            </li>

          
        );
    }
}