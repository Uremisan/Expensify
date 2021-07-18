import './App.css';
import React from 'react';
import Dashboard from './pages/dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';
import Display from './pages/Display';


class App extends React.Component{

  render(){
    return (
      <BrowserRouter>
      <Switch>
        <ProtectedRoute path ="/dashboard" exact component={Dashboard}/>
        <Route path ="/login" component={Login}></Route>
        <Route path = "/signup" component={Signup}></Route>
        <Route exact path = '/' component = {Display}/>
      </Switch>
      </BrowserRouter>
  
    );
  }

}
export default App;

