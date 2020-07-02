import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import About from '../components/About'
import Users from '../components/Users'

const AppRouter = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/users' component={Users}></Route>
        </Switch>
    </Router>
)


export default AppRouter;
