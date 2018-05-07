import dispatcher from "../Dispatcher";


export function createTraining(saison,equipe,sessionName,timeHour,timeMinute,date,timeDurationHour,timeDurationMinute,locationName,locationAdresse){
    dispatcher.dispatch({
        type:"CREATE_TRAINING",
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
    });
}
