import Photo from "../components/Photo";
import TeamsStore from "../Stores/TeamsStore";
import Team from "../components/Team";
import Player from "../components/Player";
import React from "react";



export default class TeamInfos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          players :TeamsStore.getAllJoueursForTeam(this.props.params.id),
          team :TeamsStore.getTeam(this.props.params.id),
        };
      }
     
  
    render(){
        const { players } = this.state;
        console.log(players);
        const { team } = this.state;
        console.log("TT");
        console.log(team)
        const DesJoueurs = players.map((joueur) =>
      { return <Player key={joueur.Id} prenom={joueur.Prenom} nom={joueur.Nom} numero={joueur.Numero} pointfort={joueur.PointFort} pointFaible={joueur.PointFaible}
    postitionPrimaire ={joueur.PositionPrimaire} positionsecondaire ={joueur.PositionSecondaire} photo={joueur.Photo} />});
        return(
            <div>
            <h1> {team.name}</h1>
            <img className="photoJoueur" src={"../photos/"+team.photo} alt=""/>
            <div id="JoueursTeam">
            <h3>Les joueurs de l'equipe</h3>
            <ul id="JoueursDeLequipe">{DesJoueurs}</ul>
            </div>
            <div >
            <p>{"fiche : "+ team.victoire + "-" + team.defaite} </p>
            </div>
            </div>
        );
    }
}
