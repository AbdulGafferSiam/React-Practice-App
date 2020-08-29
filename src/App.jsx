import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import Service from './Service';
import './index.css';

// reference : 
// https://medium.com/@migcoder/difference-between-render-and-component-prop-on-react-router-v4-368ca7fedbec
// https://stackoverflow.com/questions/48150567/react-router-difference-between-component-and-render

const App = () => {

    return (
        <>
            <Menu />
            <Switch>
                {/* If clicked, component call the whole element and show on the screen all time*/}
                <Route exact path='/' component={() => <About pageName="About" />} />
                {/* Render check changes of value on every chick and only changed result show on screen*/}
                <Route exact path='/contact' render={() => <Contact pageName="Contact" />} />
                <Route path='/service' component={Service} />
                <Route component={Error} />
            </Switch>
        </>
    );
}

export default App;