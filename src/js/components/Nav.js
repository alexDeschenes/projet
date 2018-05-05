import React from "react";
import { Link } from "react-router";


export default class Nav extends React.Component{
    constructor(){
        super()
       
        this.state = {
            collapsed:true,
        };
    }

    toggleCollapse(){
        console.log(this.state.collapsed);
        const collapsed = ! this.state.collapsed;
        console.log(this.navClass);
        
        
        this.setState({collapsed});
        console.log(this.state.collapsed);
    }
    render(){
        
        const { location } = this.props;
        const { collapsed }= this.state;
        const nouvelleClass = location.pathname === "/"? "nav-item active" : "nav-item";
        const photoClass = location.pathname.match(/^\/Photos/) ? "nav-item active" : "nav-item";
        const equipesClass = location.pathname.match(/^\/Equipes/) ? "nav-item active" : "nav-item";
        const disponnibiliteClass = location.pathname.match(/^\/Disponnibilite/) ? "nav-item active" : "nav-item";
        const CreateNewsClass = location.pathname.match(/^\/CreateNews/) ? "nav-item active" : "nav-item";
        
        const navClass= collapsed ? " collapse" : "";
        return(
        <div className= "Navigation">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
             <div className="container">
            <button className="navbar-toggler" type="button"data-toggle="collapse" onClick={this.toggleCollapse.bind(this)}>
            <span className="navbar-toggler-icon"></span>
            </button>
            <div id="TEST" >
         <div className= {navClass + " navbar-collapse" } id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
                <li className={nouvelleClass}>
                    <Link to ="/" className="nav-link" >Nouvelles</Link>
                </li>
                <li className={photoClass}>
                    <Link  to ="Photos" className="nav-link">Photos</Link>
                </li>
                <li className={equipesClass}>
                    <Link  to ="Equipes" className="nav-link">Équipes</Link>
                </li>
                <li className={disponnibiliteClass}>
                    <Link  to ="Disponnibilite" className="nav-link">Disponnibilité</Link>
                </li>
                <li className={CreateNewsClass}>
                    <Link  to ="CreateNews" className="nav-link">Creer une nouvelle</Link>
                </li>
            </ul>
            </div>
            </div>
        </div>
        </nav>
    </div>
        );
    }
}