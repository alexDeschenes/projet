import Photo from "../components/Photo";
import photosStore from "../Stores/PhotosStore";
import React from "react";


export default class EventsPictures extends React.Component{
    constructor(props){
        super(props);
        console.log("aaa");
        console.log(props);
        this.state = {
          pictures :photosStore.getAllPicturesForEvents(this.props.params.events),
        };
        photosStore.on("change", ()=>{
          this.setState({
          pictures :[],
          });
        });
      }
     
  
    render(){
     
      ;
        const { pictures } = this.state;
       
        const DesPhotos = pictures.map((photo) =>
      { return <Photo key={photo.id} name={photo.name} nameLarge={photo.nameLarge} title ={photo.title}/>});
        return(
            <div>
            <h1> Notre galerie photo</h1>
            <div id="Gallery">{DesPhotos}</div>
            </div>
        );
    }
}