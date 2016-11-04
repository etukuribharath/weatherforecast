import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class WeatherCard extends Component{

		constructor(props) {
      super(props);
		
      this.state = {
        data:[],
        data1:[]
      }
   }
componentDidMount() {
	this.setState(

        {data1:this.props.data1,data:this.props.data});
}
	render(){
		return(		
					<div>
						{this.state.data.length>0?
							<div><h3>{this.state.data[0].dt_txt.split(" ")[0]}</h3>
								{this.state.data1.map((a,key)=>{
                                   
									return( this.state.data[0].dt_txt.split(" ")[0]==a.dt_txt.split(" ")[0]?<table key={key} style={{margin:"10px", border:"2px solid"}}>
    <tr style={{border: "1px solid black"}}>Time {a.dt_txt}</tr>
    <tr style={{border: "1px solid black"}}>
 		<td style={{border: "1px solid black"}}>Temp</td>
    	<td style={{border: "1px solid black"}}>{a.main.temp} F</td>
    </tr>
    <tr style={{border: "1px solid black"}}>
 		<td style={{border: "1px solid black"}}>Humidity</td>
    	<td style={{border: "1px solid black"}}>{a.main.humidity} %</td>
    </tr>
    <tr style={{border: "1px solid black"}}>
    	<td style={{border: "1px solid black"}}>Description</td>
    	<td style={{border: "1px solid black"}}>{a.weather[0].description}</td>
    </tr>
    <tr style={{border: "1px solid black"}}>
    	<td style={{border: "1px solid black"}}>Wind Speed at degree</td>
    	<td style={{border: "1px solid black"}}>{a.wind.speed} at {a.wind.deg}deg</td>
    </tr>
</table>:null);
								})}
							</div>
						:""}
					{console.log("hello",this.state.data)}

					</div>

				);
	}
}

export default WeatherCard;