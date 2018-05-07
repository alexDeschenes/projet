import React from "react";
import * as TrainingActions from "../Actions/TrainingAction";
import TrainingStore from "../Stores/TrainingStore"
import ClockPicker from 'react-clockpicker';
import DayPicker from 'react-day-picker';

import trainingStore from "../Stores/TrainingStore";


export default class CreateTraining extends React.Component{
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
          hours: 12,
          minutes: 20,
          enabled: true,
          date: new Date(),
          minuteDuration:20,
          hoursDuration:12,
          enabledDuration :true,
          selectedDay: undefined,

        };
    }
handleDayClick(day,{selected}){
        if (selected) {
        // Unselect the day if already selected
        this.setState({ selectedDay: undefined });
        return;
        }
        var tt =new Date(day);
        console.log(tt);
        var date = tt.toLocaleDateString();
        this.setState({ selectedDay: day });
        console.log(this.state.selectedDay);
    }
 createTrainning(){
  const _from = document.getElementById("CreateNewsFrom");
  const txtSaison =_from.elements[0].value;
  const txtSaisonName =_from.elements[1].value;
  const txtLocation =_from.elements[2].value;
  const txtLocationAdresse =_from.elements[2].value;
  console.log(trainingStore.getAllTraining());
  TrainingActions.createTraining(txtSaison,1,txtSaisonName,this.state.hours,this.state.minutes,Date.now(),this.state.hoursDuration,this.state.minuteDuration,txtLocation,txtLocationAdresse);
  console.log(trainingStore.getAllTraining());
}
 onChange = date => this.setState({ date })
  
  render()
  {
    let { hours, minutes, enabled ,date,minuteDuration,hoursDuration,enabledDuration} = this.state;
    //let checkboxDuration = <input type="checkbox" checked={this.state.enabledDuration} onChange={(e) => this.setState({ enabledDuration: e.target.checked })} />;
   //let checkbox = <input type="checkbox" checked={this.state.enabled} onChange={(e) => this.setState({ enabled: e.target.checked })} />;
        return(
        <div>           
          <h2 className="my-4">Créé une pratique</h2>
          <form target="_blank" id="CreateNewsFrom">
            <label for="LblSaison">Saison </label>
                <input type="text" name="titreSaison" id="titreSaison"/>
            <label for="SessionName">Session Name  </label>
                <input type="text" name="SessionName" id="SessionName"/>
            <div id="timeForPratice">
            <label >time </label>
             
            <ClockPicker
                hours={hours}
                minutes={minutes}
                disabled={enabled}
                onChange={(hours, minutes) => this.setState({ hours, minutes })} />
               
            <label >Date</label>
            
            <DayPicker onDayClick={this.handleDayClick} selectedDays={this.state.selectedDay}/>
            
            <label >time </label>
            
              
         <ClockPicker
                hours={hoursDuration}
                minutes={minuteDuration}
                disabled={!enabledDuration}
            
                onChange={(hoursDuration, minuteDuration) => this.setState({ hoursDuration, minuteDuration })} />

        
            </div>
            <div>
            <label for="SessionLocation">Location name :  </label>
                <input type="text" name="SessionLocation" id="SessionLocation"/>
            <label for="SessionLocationAdresse">Location adresse :  </label>
                <input type="text" name="SessionLocationAdresse" id="SessionLocationAdresse"/>
            </div>      
           
          </form> 
          <button onClick={this.createTrainning.bind(this)} > Créer </button>
        </div>
        );
    }
}