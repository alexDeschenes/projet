import React from "react";


export default class Photo extends React.Component{
    render(){
        const { name } = this.props;
        const { nameLarge } = this.props;
        const { title } = this.props;
        return(
         <a href={"../photos/"+nameLarge} data-lightbox="myGallery" data-title={title}>
                <img className="photoGal" src={"../photos/"+name} alt=""/>
              </a>
          
        );
    }
}