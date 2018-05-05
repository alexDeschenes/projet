import dispatcher from "../Dispatcher";


export function createTodo(title,description){
    dispatcher.dispatch({
        type:"CREATE_NEWS",
        description,
        title,
    });
}