import React from "react";
import { Link } from "react-router";


export default class PointTechnique extends React.Component{
    render(){
        const { element } = this.props;        
        return(
            <li>
                <p className="Points">{element}</p>
            </li>
        );
    }
}