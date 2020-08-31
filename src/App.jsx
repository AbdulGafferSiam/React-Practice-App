import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import Service from './Service';
import User from './User';
import Search from './Search';
import './index.css';

// reference : 
// https://medium.com/@migcoder/difference-between-render-and-component-prop-on-react-router-v4-368ca7fedbec
// https://stackoverflow.com/questions/48150567/react-router-difference-between-component-and-render

// useParam()
// https://medium.com/better-programming/how-to-pass-multiple-route-parameters-in-a-react-url-path-4b919de0abbe

const App = () => {

    return (
        <>
            <Menu />
            <Switch>
                {/* If clicked, component call the whole element and show on the screen all time*/}
                <Route exact path='/' component={() => <About pageName="About" />} />
                {/* Render check changes of value on every chick and only changed result show on screen*/}
                <Route exact path='/contact' render={() => <Contact pageName="Contact" />} />
                <Route exact path='/service' component={Service} />
                <Route exact path='/user/:fname' component={User} />
                <Route exact path='/user/:fname/:lname' component={User} />
                <Route exact path='/search' component={Search} />
                {/* <Route component={Error} /> */}
                <Redirect to="/" />
            </Switch>
        </>
    );
}

export default App;