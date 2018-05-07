import { EventEmitter } from "events";
import dispatcher from "../Dispatcher";
class TrainingStore extends EventEmitter{
    constructor(){
        super()
        this.trainingforTeam=[];
        this.training = [
                {
                    saison : "2017-2018",
                    equipe:1,
                    sessionName : "Pratique1",
                    timeHour:2,
                    timeMinute:30,
                    date:"2018-01-01",
                    timeDurationHour:1,
                    timeDurationMinute:30,
                    locationName: "bocages",
                    locationAdresse:"3362 maricourt ",
                    id: 1,
                },
                {
                    saison : "2017-2018",
                    equipe:1,
                    sessionName : "Pratique2",
                    timeHour:2,
                    timeMinute:30,
                    date:"2018-05-01",
                    timeDurationHour:2,
                    timeDurationMinute:30,
                    locationName: "bocages",
                    locationAdresse:"3362 maricourt ",
                    id: 2,

                },
                {
                    saison : "2017-2018",
                    equipe:1,
                    sessionName : "Pratique3",
                    timeHour:1,
                    timeMinute:30,
                    date:"2018-07-01",
                    timeDurationHour:2,
                    timeDurationMinute:30,
                    locationName: "bocages",
                    locationAdresse:"3362 maricourt ",
                    id: 3,
                },
        ];
  
    }
    createTraining(saison,equipe,sessionName,timeHour,timeMinute,date,timeDurationHour,timeDurationMinute,locationName,locationAdresse){
        const id =Date.now();
        this.training.push({
            saison,
            equipe,
            sessionName,
            timeHour,
            timeMinute,
            date,
            timeDurationHour,
            timeDurationMinute,
            locationName,
            locationAdresse,
            id,
        });
        this.emit("change");
    }
    
    getAllTraining(){
        return this.training;
   }
    getAllJoueursForTeam(TeamID){
     this.trainingforTeam=[];   
     for (var i=0;i<this.training.length-1;i++)
        {
           
            if(this.training[i].equipe==TeamID){
                this.trainingforTeam.push(this.training[i]);
            }
        }
        return this.trainingforTeam;
    }

    handleActions(action){
        switch(action.type){
            case"CREATE_TRAINING":{
                
                this.createTraining(action.saison,action.equipe,action.sessionName,action.timeHour,action.timeMinute,action.date,action.timeDurationHour,action.timeDurationMinute,action.locationName,action.locationAdresse);
            }
        }
    }
}
const trainingStore = new TrainingStore();
dispatcher.register(trainingStore.handleActions.bind(trainingStore));
export default trainingStore;
