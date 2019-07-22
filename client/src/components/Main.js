import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Landingpage from './Landingpage'
import Register from './Register'
import Login from './Login'

const Main = ()=>(
    <BrowserRouter>
<Switch>
<Route exact path="/" component={Landingpage}/> 
<Route path="/register" component={Register} />
<Route path="/login" component={Login}/>

</Switch>
</BrowserRouter>
);
export default Main
