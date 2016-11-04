import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class UserInput extends Component{
	constructor(props) {
      super(props);
		
      this.state = {
       email:null
      }
   }
	handleCity(e){
		this.setState({city: e.target.value});
		console.log(this.state.city)
	}
	render(){
		return(
		<div style={{marginTop:"60px",textAlign:"center"}}><TextField
      hintText="Enter the city name" onChange={this.handleCity}
    />
    <RaisedButton label="submit" primary={true}/>
    </div>
		);
	}
}

export default UserInput;