import ExpenseForm from '../Components/ExpenseForm';
import ExpenseList from '../Components/ExpenseList';
import ExpenseItem from '../Components/ExpenseItem';
import { useState} from 'react';
import Editform from '../Components/Editform';
import React from 'react';
import { logout } from '../actions/authActions';
import { connect } from 'react-redux';


class Dashboard extends React.Component{
  //Logout section
  handleLogout = () => {
    this.props.logout();
  }

  render(){
    return (
      <div className="row">
        <div className = "col-md-6 userinput">

          <ExpenseForm addUser = {this.addUser} /> 
          <br></br>
          <button onClick={this.handleLogout}>Log out</button>
        </div>
        
        <div className = "col-md-6 Notelist">
          <ExpenseList />   
        </div>
        
      </div>
  
    );
  }

}

const mapDispatchToProps = {logout}

export default connect (null, mapDispatchToProps) (Dashboard);

