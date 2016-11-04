import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import WeatherCard from './weathercard.jsx'
var Flex=require("../../node_modules/flexboxgrid/css/flexboxgrid.css");

class DaysWeatherData extends Component{
	constructor(props) {
      super(props);
		
      this.state = {
        data:{}
      }
   }

   componentDidMount() {

		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/forecast?q=Kurnool,in&mode=json&appid=5c0b52705f677d3217ce78a3d1865e4f",
			dataType: 'json',
			type: 'GET',
		}).done(function(d){
			this.setState({data:d});
			console.dir(this.state.data);
		}.bind(this))

	}


	render(){
		return(
			<center><Card style={{marginTop:"10px",width:"80%",textAlign:"center"}}>
    
    
    <CardTitle title="Card title" subtitle="Card subtitle" />
    	<div className="container-fluid">
    	{console.log("error handle",this.state.data)}
    	{this.state.data.city?
    			<table style={{border:"2px solid black"}}><tr style={{margin:"10px"}}>
				    <td style={{ marginTop:"10px"}}><WeatherCard data={this.state.data.list.slice(0,7 )} data1={this.state.data.list}/></td>
				    <td style={{ marginTop:"10px"}}><WeatherCard data={this.state.data.list.slice(7,14)} data1={this.state.data.list}/></td>
				    <td style={{ marginTop:"10px"}}><WeatherCard data={this.state.data.list.slice(14,21)} data1={this.state.data.list}/></td>
				    <td style={{ marginTop:"10px"}}><WeatherCard data={this.state.data.list.slice(21,28)} data1={this.state.data.list}/></td>
				    <td style={{ marginTop:"10px"}}><WeatherCard data={this.state.data.list.slice(28,35)} data1={this.state.data.list}/></td>
				    </tr>
			    </table>
			    :"Loading data"}
		</div>

    </Card></center>


    );
	}
}

export default DaysWeatherData;
