import { EventEmitter } from "events";
import dispatcher from "../Dispatcher";
class NewsStore extends EventEmitter{
    constructor(){
        super()
        this.news = [
                {
                title : "Some News",
                description :"test1",
                id: 1234,
                },
                {
                    title : "Some News1",
                    description :"test2",
                    id: 12344,

                },
                {
                    title : "Some News2",
                    description :"test3",
                    id: 123445,
                },
                {
                    title : "Some News3",
                    description :"test4",
                    id: 123446,
                },
            
        ];
    }
    createNews(title,description){
        console.log("CCAC");
        console.log(description);
        const id =Date.now();
        this.news.push({
            title,
            description,
            id,
        });
        this.emit("change");
    }
 
   getAll(){
        return this.news;
    }
    handleActions(action){
        switch(action.type){
            case"CREATE_NEWS":{
                console.log(action);
                this.createNews(action.title,action.description);
            }
        }
    }
}
const newsStore = new NewsStore();
dispatcher.register(newsStore.handleActions.bind(newsStore));
export default newsStore;
