import React from 'react';
import { Link } from 'react-router-dom';



class Display extends React.Component {
  constructor(props){
    super(props)
  }
  render() 
  {
    return (
      <div>
        <div className = 'cont1' style = {{marginLeft: 450}}><h2>Welcome</h2></div>


        <div className = 'container'>
          <div className = 'col-md-6'>
            <h4>New here? Sign up for free</h4>
            <h4><Link to = '/signup'>Signup</Link></h4>
          </div>

          <div className = 'container'>
           <div className = 'col-md-6'>
             <h4>Already have an account? Login!</h4>
            <h4><Link to = '/login'>Login</Link></h4>
            </div>
          </div>
        </div>
      </div>
    )

  }

}

export default Display;
