import React, {useState} from 'react';
import './ExpenseForm.css'
import { connect } from 'react-redux';
import {addUser, addUserAction} from '../actions/userActions';


class ExpenseForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        category: "",
        date: "",
        item: "",
        amount : "",
    };
}

  handleOnChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = () => {
    let userId = 10000 + Math.random() * 10000000;
    let user = {...this.state, id:userId};
    this.props.addNewUser(user);
    this.setState({
      category : "",
      date : "",
      item : "",
      amount : "",
  })
  }
  
  render(){
  return (
    <div className="wrapper">
 
      <form>
        <h1>Record New Expense</h1>
        <fieldset>
          <br /><label className="check">Category</label><br />
          <select name="category" id="cag1" value = {this.state.category} onChange = {this.handleOnChange}>
                        <option value="" disabled>Select</option>
                        <option value="Food and Drinkss">Food and Drinks</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Accomodation">Accomodation</option>
                        <option value="Housing">Housing</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                    </select>
        </fieldset> 
        
        <div>
          <fieldset>
          <br /><label className="check">Item/Service</label><br />
          <textarea  id="textboxid2"  name="item" value={this.state.item} onChange={this.handleOnChange}></textarea>
          </fieldset>
        </div> 

        <div>
          <fieldset>
          <br /><label className="check">Amount</label><br />
          <textarea  id="textboxid2"  name="amount" value={this.state.amount} onChange={this.handleOnChange}></textarea>
          </fieldset>
        </div>

        <div>
          <fieldset>
          <br /><label className="check">Date</label><br />
          <input type="date" id="textboxid" name="date"  value={this.state.date} onChange={this.handleOnChange}></input>
          </fieldset>
        </div> 


        <div>
          <br /><button type="button" id="b100" onClick={this.handleSubmit}>Save</button><br />
        </div>
      </form>
    </div>
  );
  }
}

const mapDispatchToProps = {
  addNewUser : addUserAction
}

export default  connect(null,mapDispatchToProps)(ExpenseForm);