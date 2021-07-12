import ExpenseForm from '../Components/ExpenseForm';
import ExpenseList from '../Components/ExpenseList';
import ExpenseItem from '../Components/ExpenseItem';
import { useState} from 'react';
import Editform from '../Components/Editform';
import React from 'react';

class Dashboard extends React.Component{

  render(){
    return (
      <div className="row">
        <div className = "col-md-6 userinput">

          <ExpenseForm addUser = {this.addUser} /> 
        </div>
        
        <div className = "col-md-6 Notelist">
          <ExpenseList />   
        </div>
        
      </div>
  
    );
  }

}
export default Dashboard;

