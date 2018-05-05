import Photo from "../components/Photo";
import photosStore from "../Stores/PhotosStore";
import React from "react";


export default class EventsPictures extends React.Component{
    constructor(){
        super();

        this.state = {
          pictures :[],
        };
        photosStore.on("change", ()=>{
          this.setState({
          pictures :[],
          });
        });
      }
     GetPictures(){
        console.log("tt");
        console.log(this.props.params.events);
        var lesImgs=photosStore.getAllPicturesForEvents(this.props.params.events);
        console.log(lesImgs);
     //   this.setState({
     //       pictures:lesImgs,
     //   });
       }
     
    render(){
     
        this.GetPictures(this.props.params.events);
        const { pictures } = this.state;
        console.log(pictures);
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