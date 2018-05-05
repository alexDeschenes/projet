import { EventEmitter } from "events";
import dispatcher from "../Dispatcher";
class PhotosStore extends EventEmitter{
    constructor(){
        super()
        this.imgForEvents=[];
        this.pictures = [
                {
                name : "AAAQCKnightGarcons2018.jpg",
                nameLarge : "AAAQCKnightGarcons2018Large.jpg",
                title :"Garçons AAA",
                id: 1234,
                },
                {
                    name : "AAFeminAlex.jpg",
                    nameLarge : "AAFeminAlexLarge.jpg",
                    title :"Féminin AA",
                    id: 12344,

                },
                {
                    name : "BasketAALG.jpg",
                    nameLarge : "BasketAALGLarge.jpg",
                    title :"Garçons AA",
                    id: 123445,
                },
                {
                    name : "Logo.jpg",
                    nameLarge : "LogoLarge.jpg",
                    title :"Logo",
                    id: 123446,
                },
            
        ];
        this.events = [
            {
            name : "AAAQCKnightGarcons2018.jpg",
            title :"Garçons AAA",
            id: 1234,
            },
            {
                name : "AAFeminAlex.jpg",
                title :"Féminin AA",
                id: 12344,

            },
            {
                name : "BasketAALG.jpg",
                title :"Garçons AA",
                id: 123445,
            },
            {
                name : "Logo.jpg",
                title :"logo",
                id: 123446,
            },
        
    ];
  
    }
    createPicture(name,nameLarge,title){
        const id =Date.now();
        this.pictures.push({
            name,
            nameLarge,
            title,
            id,
        });
        this.emit("change");
    }
    createEvents(name,title){
        const id =Date.now();
        this.pictures.push({
            name,
            title,
            id,
        });
        this.emit("change");
    }
    
    
    getAllEvents(){
        return this.events;
   }
   getAllPictures(){
        return this.pictures;
    }
    getAllPicturesForEvents(EventName){
     for (var i=0;i<this.pictures.length;i++)
        {
            console.log(this.pictures[i].title);
            console.log( "events " + EventName);
            if(this.pictures[i].title=EventName){
                console.log("yesss");
                this.imgForEvents.push(this.pictures[i]);
            }
        }
        return this.imgForEvents;
    }
    
    handleActions(action){
        switch(action.type){
            case"CREATE_PICTURE":{
                this.createNews(action.name,actione.nameLarge,action.title);
            }
            case"CREATE_EVENTS":{
                this.createEvents(action.name,action.title);
            }
        }
    }
}
const photosStore = new PhotosStore();
dispatcher.register(photosStore.handleActions.bind(photosStore));
export default photosStore;
