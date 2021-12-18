import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Home from './Home';
import Navbar from './Navbar';
import Footer from "./Footer";
import { Switch, Route, Redirect} from "react-router";

const App =() => {
    return (
        <>
        <Navbar />
        <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/contact" component = {Contact} />
            <Route exact path = "/services" component = {Service} />
            <Route exact path = "/about" component = {About} />
            <Redirect to = "/" />
        </Switch>
        <Footer />
        </>
    );
};

export default App;