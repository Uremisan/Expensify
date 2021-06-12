import React from 'react';
import ExpenseItem from './ExpenseItem';
import { connect } from 'react-redux';

class ExpenseList extends React.Component{ 
  render(){
  return (
    <div className="wrap">
      <h1>Expense List</h1>
      <br /><br />
      {this.props.usersData.map((user) => (
        
        <ExpenseItem user={user} delete={this.props.deleteUser} updateUser={this.props.updateUser} />
  ))}
    </div>
  )
  }
}
const mapStateToProps = (state) =>{
  return{
  usersData: state.users
}
}

export default connect (mapStateToProps)(ExpenseList);