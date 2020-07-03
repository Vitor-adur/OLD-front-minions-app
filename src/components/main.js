import React from "react";
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import Loja from './loja';
import Reserva from './no_use/reserva';
import Login from "./no_use/login";
//import Login from './login';
//import { AppContext } from "../libs/contextLib";

//comentários feitos caso o uso do Cognito seja feito posteriormente, evitar retrabalho

//const [isAuthenticated, userHasAuthenticated] = useState(false);
const Main = () => (
//   <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
    <Switch>
        <Route exact path = "/" component = {LandingPage} />
        <Route path = "/loja" component = {Loja} />
        <Route path = "/reserva" component = {Reserva} />
        <Route path = "/login" component = {Login} />

   </Switch>
//</AppContext.Provider>
)

export default Main;