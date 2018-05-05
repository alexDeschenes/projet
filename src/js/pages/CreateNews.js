import React from "react";
import Nouvelle from "../components/Nouvelle";
import * as NewsActions from "../Actions/NewsActions";


export default class CreateNews extends React.Component{
 createNews(){
  const _from = document.getElementById("CreateNewsFrom");
  const txtTitre =_from.elements[0].value;
  const txtDescription =_from.elements[1].value;
  NewsActions.createTodo(txtTitre,txtDescription);
 }
  
  render()
  {
        return(
        <div>           
          <h2 className="my-4">Créé une nouvelles</h2>
          <form target="_blank" id="CreateNewsFrom">
            <label for="titreNews">titre </label>
                <input type="text" name="titreNews" id="titreNews"/>
            <label for = "DescNews">Description</label>
                <textarea name="Description"id="DescNews"rows="10" cols="50" />              
           
          </form> 
          <button onClick={this.createNews.bind(this)} > Créer </button>
        </div>
        );
    }
}