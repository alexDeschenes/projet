import Events from "../components/event";
import photosStore from "../Stores/PhotosStore";
import React from "react";


export default class Photos extends React.Component{
    constructor(){
        super();
        this.state = {
          events : photosStore.getAllEvents(),
        };
        photosStore.on("change", ()=>{
          this.setState({
            events: photosStore.getAllEvents(),
          });
        });
      }
    render(){
        const { events } = this.state;
        const DesEvents = events.map((events) =>
      { return <Events key={events.id} name={events.name} title ={events.title}/>});
        return(
            <div>
            <h1> Notre galerie photo</h1>
            <div id="GalleryEvents">
              <ul id="LesGalery">
              {DesEvents}
              </ul>
            </div>
            </div>
        );
    }
}
