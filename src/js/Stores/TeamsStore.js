import { EventEmitter } from "events";
import dispatcher from "../Dispatcher";
class TeamsStore extends EventEmitter{
    constructor(){
        super()
        this.playersForTeams=[];
        this.teams = [
                {
                name : "AAA garçons 2018",
                photo : "AAAQCKnightGarcons2018.jpg",
                victoire:2,
                defaite:1,
                id: 1,
                },
                {
                    name : "AA Féminin 2018",
                    photo : "AAFeminAlex.jpg",
                    victoire:2,
                    defaite:1,
                    id: 2,

                },
                {
                    name : "AA garçon 2018",
                    photo : "BasketAALG.jpg",
                    victoire:2,
                    defaite:1,
                    id: 3,
                },
        ];
        this.Players = [
            {
                Prenom : "Juliette",
                Nom :"Gargya",
                Numero : 23,
                Equipe:1,
                Id: 1234,
                PointFort:["move","dribbling"],
                PointFaible:["shooting","idk"],
                PositionPrimaire:1,
                PositionSecondaire:2,
                Photo:"AAFeminAlex.jpg",
            },
            {
                Prenom : "Laurence",
                Nom :"Tremblay",
                Numero : 24,
                Equipe:1,
                Id: 12344,
                PointFort:["move","dribbling"],
                PointFaible:["shooting","idk"],
                PositionPrimaire:1,
                PositionSecondaire:2,
                Photo:"AAFeminAlex.jpg",

            },
            {
                Prenom : "Charles",
                Nom :"Lacroix",
                Numero : 24,
                Equipe:2,
                Id: 123445,
                PointFort:["move","dribbling"],
                PointFaible:["shooting","idk"],
                PositionPrimaire:1,
                PositionSecondaire:2,
                Photo:"AAFeminAlex.jpg",
            },
            {
                Prenom : "Mathis",
                Nom :"Rioux",
                Numero : 24,
                Equipe:3,
                Id: 123444,
                PointFort:["move","dribbling"],
                PointFaible:["shooting","idk"],
                PositionPrimaire:1,
                PositionSecondaire:2,
                Photo:"AAFeminAlex.jpg",
            },
        
    ];
  
    }
    createTeams(name,photo){
        const id =Date.now();
        this.teams.push({
            name,
            photo,
            id,
        });
        this.emit("change");
    }
    createJoueur(prenom,nom,numero,equipe,pointfort,pointFaible,postitionPrimaire,Positionsecondaire,photo){
        const id =Date.now();
        this.Players.push({
            prenom,
            nom,
            numero,
            equipe,
            id,
            pointfort,
            pointFaible,
            postitionPrimaire,
            Positionsecondaire,
            photo,

        });
        this.emit("change");
    }
    
    
    getAllTeams(){
        return this.teams;
   }
   getAllPlayers(){
        return this.Players;
    }
    getAllJoueursForTeam(TeamID){
     this.playersForTeams=[];   
     console.log('omg');
     for (var i=0;i<this.Players.length-1;i++)
        {
            console.log(this.Players[i].Equipe)
            if(this.Players[i].Equipe==TeamID){
                this.playersForTeams.push(this.Players[i]);
            }
        }
        return this.playersForTeams;
    }
    getJoueur(ID){
        for (var i=0;i<this.Players.length-1;i++)
           {
               if(this.Players[i].id==ID){
                   return this.Players[i];
               }
           }
           return null;
       }
    getTeam(ID){
        for (var i=0;i<this.teams.length-1;i++)
           {
               if(this.teams[i].id==ID){
                   return this.teams[i];
               }
           }
           return null;
       }
    
    handleActions(action){
        switch(action.type){
            case"CREATE_Joueur":{
                renom,nom,numero,equipe,pointfort,pointFaible,postitionPrimaire,Positionsecondaire,photo
                this.createJoueur(action.prenom,action.nom,action.numero,
                    action.equipe,actions.pointfort,action.pointFaible,
                    action.postitionPrimaire,action.Positionsecondaire,action.photo);
            }
            case"CREATE_Team":{
                this.createTeams(action.name,action.photo);
            }
        }
    }
}
const teamsStore = new TeamsStore();
dispatcher.register(teamsStore.handleActions.bind(teamsStore));
export default teamsStore;
