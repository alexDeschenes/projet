import React from "react";
import Team from "../components/Team";
import teamsStore from "../Stores/TeamsStore";

export default class Equipes extends React.Component{
    constructor(){
        super();
        this.state = {
          teams : teamsStore.getAllTeams(),
        };
        teamsStore.on("change", ()=>{
          this.setState({
            teams: teamsStore.getAllTeams(),
          });
        });
      }
    render(){
        const { teams } = this.state;
        console.log(teams);
        const DesTeams = teams.map((teams) =>
      { return <Team key={teams.id} name={teams.name} photo ={teams.photo} id={teams.id}/>});
        return(
                <div>
                <h1> Nos équipes</h1>
                <div >
                  <ul id="LesTeams">
                  {DesTeams}
                  </ul>
                </div>
                </div>
            );
        
    }
}
