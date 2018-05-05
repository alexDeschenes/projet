import React from "react";
import Nouvelle from "../components/Nouvelle";
import newsStore from "../Stores/NewsStore";
import * as NewsActions from "../Actions/NewsActions";


export default class Nouvelles extends React.Component{
  constructor(){
    super();
    this.state = {
      nouvelles : newsStore.getAll(),
    };
    newsStore.on("change", ()=>{
      this.setState({
        nouvelles: newsStore.getAll(),
      });
    });
  }
  render()
  {
    const { nouvelles } = this.state;
    const DesNouvelles = nouvelles.map((nouvelle) =>
  { return <Nouvelle key={nouvelle.id} title ={nouvelle.title} description ={nouvelle.description} />});
        return(
          <div>
          <div className="PhotoLeft">
             <img className="imgPhotoLeft" src="../photos/AAAQCKnightGarcons2018.jpg" alt=""/>
          </div>
          <div className="PhotoRight">
             <img className="imgPhotoRight" src="../photos/AAFeminAlex.jpg" alt=""/>
          </div>
           <div id="LesNouvelles">           
          <h1 className="my-4">Nos Nouvelles
          </h1>
          <div id="News_Container">{DesNouvelles}</div>
       
        </div>
        </div>
        );
    }
}