import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Layout from "./pages/Layout";
import Equipes from "./pages/Equipes";
import Photos from "./pages/Photos";
import Nouvelles from "./pages/Nouvelles";
import CreateNews from "./pages/CreateNews";
import Disponnibilite from "./pages/Disponnibilite";
import EventsPictures from "./pages/EventsPictures";
import TeamInfos from "./pages/TeamInfo";



const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component = {Layout}>
            <IndexRoute component = {Nouvelles}></IndexRoute>
        <Route path="/Equipes" component={Equipes}></Route>
        <Route path="/Equipes/:id" component={TeamInfos}></Route>
        <Route path="/CreateNews" component={CreateNews}></Route>
        <Route path="/Photos" component={Photos}></Route>
        <Route path="/Photos/:events" component={EventsPictures}></Route>
        <Route path="/Disponnibilite" component={Disponnibilite}></Route>

        </Route>
    </Router>,
    app);
