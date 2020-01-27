import React from 'react';
import Posts from './Posts'
import axios from 'axios'
import CreatePost from './CreatePost';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Error from './Error'
import Register from './Register'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import IndividualPost from './IndividualPost';
const Main = () => {
    return (
        <BrowserRouter>
<Navbar/>
<Switch>
<Route exact path='/' component={Home}/>
<Route exact path='/posts' component={Posts}/>
<Route exact path='/posts/:posts_id' component={IndividualPost}/>
<Route exact path='/about' component={About}/>
<Route exact path='/contact' component={Contact}/>
<Route exact path='/register' component={Register}/>
<Route component={Error}/>
</Switch>


</BrowserRouter>

    )
}
export default Main;