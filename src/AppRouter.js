import React from 'react'
import { Route,BrowserRouter as Router,Switch } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Navbar from './components/Navbar';
import Footer from './components/Footer'

const AppRouter = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/about" component={About}/>
                <Route path="/services" component={Services}/>
                <Route path="/" exact component={Home}/>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default AppRouter;
