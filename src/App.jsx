import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import './index.css';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import NavBar from './Navbar';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

const App = () => {

    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </>
    );
}

export default App;