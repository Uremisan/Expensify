import React, { useState } from 'react';
import { connect } from "react-redux";
import { editUserAction } from '../actions/userActions';

class EditContactForm extends React.Component {
  constructor(props){
    super(props)
    //autofill the edit form with the info saved already
  this.state = {
    category: this.props.user.category,
    item: this.props.user.item,
    amount: this.props.user.amount,
    date: this.props.user.date,
  };
    
  }

  handleOnChange = (event) => {
    
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

 
  handleSubmit = () => {
    let user = { ...this.state, id: this.props.user.id }
    this.props.editUser(this.props.user.id, user);
    this.props.hideModal();
  }

  render(){
  return (
    <div>
      <form>
        <div>
          <label>Category</label><br></br>
          <select name="category" id="cag1" value = {this.state.category} onChange = {this.handleOnChange}>
                        <option value="" disabled>Select</option>
                        <option value="Food and Drinkss">Food and Drinks</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Accomodation">Accomodation</option>
                        <option value="Housing">Housing</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                    </select><br></br>
        </div> 

        <div>
          <label>Item/Service</label><br></br>
          <input
            type="text"
            name="item" id="textboxid2"
            value={this.state.item} 
            onChange={this.handleOnChange} 
          /><br></br>
        </div>

        <div>
          <label>Amount</label><br></br>
          <input
            type="text"
            name="amount" id="textboxid2"
            value={this.state.amount} 
            onChange={this.handleOnChange} 
          /><br></br>
        </div>

        <div>
          <label>Date</label><br></br>
          <input
            type="date"
            name="date" id="textboxid2"
            value={this.state.date}
            onChange={this.handleOnChange} 
          /><br></br>
        </div>

        <div>
          <br></br>
          <button type="button" onClick={this.handleSubmit}>
            Update
          </button>
        </div>
      </form>
    </div>
  )
  }
}

var mapDispatchToProps = {
  editUser : editUserAction
}

export default connect(null, mapDispatchToProps)(EditContactForm);