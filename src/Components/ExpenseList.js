import React from 'react';
import ExpenseItem from './ExpenseItem';
import { connect } from 'react-redux';
import { getAllUsersAction } from '../actions/userActions';

class ExpenseList extends React.Component{
  constructor(props){
    super(props)
}

componentDidMount(){//display all users when the component mounts
  this.props.getAllUsersAction()
}

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
const mapDispatchToProps = {
  getAllUsersAction,
}

export default connect (mapStateToProps, mapDispatchToProps)(ExpenseList);