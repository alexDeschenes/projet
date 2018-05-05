import React from "react";


export default class Nouvelle extends React.Component{
    render(){
        const { title } = this.props;
        const { description } = this.props;
        return(
        <div >
            <div className="row">
            <div className="Photo">
            
              <a href="#">
                <img className="imgPhoto" src="../photos/BasketAALG.jpg" alt=""/>
              </a>
            </div>
            <div className="col-md-5">
              <h3>{title}</h3>
              <p>{description}</p>
              <a className="btn btn-primary" href="#">View Project</a>
            </div>
            </div>
        </div>
        );
    }
}