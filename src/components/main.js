import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import AboutMe from './aboutMe';
import Contact from './contact';
import Loja from './loja';
import Resume from './resume';
import Reserva from './reserva';

const Main = () => (
    <Switch>
        <Route exact path = "/" component = {LandingPage} />
        <Route path = "/aboutMe" component = {AboutMe} />
        <Route path = "/contact" component = {Contact} />
        <Route path = "/loja" component = {Loja} />
        <Route path = "/resume" component = {Resume} />
        <Route path = "/reserva" component = {Reserva} />
    </Switch>
)

export default Main;