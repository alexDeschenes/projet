import React from "react";
import { Link } from "react-router";
import PointTechnique from "./PointTechnique";


export default class Player extends React.Component{
    render(){
        console.log("WWWWWWW");
        var positionCompletePrimaire = "";
        var positionCompleteSecondaire = "";
        const { prenom }= this.props;
        const { nom }= this.props;
        const { numero }= this.props;
        const { id }= this.props;
        const { pointfort }= this.props;
        const { pointFaible }= this.props;
        const { postitionPrimaire }= this.props;
        const { positionsecondaire }= this.props;
        const { photo }= this.props;
        var i=1;
        const DesPointsPositif = pointfort.map((unpoint,i) =>
        { return <PointTechnique key={i} element={unpoint}/>}, i++);
        const DesPointsNégatifs = pointFaible.map((unpointNeg) =>
        { return <PointTechnique key={i} element={unpointNeg}/>,i++});
        console.log(postitionPrimaire + "AFSFSAF");
        switch(postitionPrimaire){
            case 1:
            console.log("I Made it");
                positionCompletePrimaire= "Monteur de ballon";
                break;
            case 2:
                positionCompletePrimaire= "Aide Monteur";
                break;
            case 3:
                positionCompletePrimaire= "Sorteur de ballon";
                break;
            case 4:
                positionCompletePrimaire= "Allier";
                break;
            case 5:
                console.log(positionCompletePrimaire)
                positionCompletePrimaire= "Centre";
                break;
        }
        switch(positionsecondaire){
            case 1:
                positionCompleteSecondaire= "Monteur de ballon";
                break;
            case 2:
                positionCompleteSecondaire= "Aide Monteur";
                break;
            case 3:
                positionCompleteSecondaire= "Sorteur de ballon";
                break;
            case 4:
                positionCompleteSecondaire= "Allier";
                break;
            case 5:
                positionCompleteSecondaire= "Centre";
                break;
        }
        console.log(postitionPrimaire + "TTTTTTTTT" + positionCompletePrimaire)
        console.log(positionCompleteSecondaire)

        return(
            <li>
                
                <div className ="APlayer">
                <Link to ={"teams/id/"+id}> <h3>{prenom +" "+ nom+" #"+numero }</h3></Link>
                <p>  {"Ses positions " +positionCompletePrimaire + " , "+positionCompleteSecondaire + "\n"}</p>
                <p>Ses points forts \n </p>
                <ul className="PointsFort">{DesPointsPositif}</ul>
                <p>Ses points faibles \n </p>
                <ul className="PointsFort">{DesPointsNégatifs}</ul>
                <img className="photoJoueur" src={"../photos/"+photo} alt=""/>
                </div>
                
            </li>

          
        );
    }
}