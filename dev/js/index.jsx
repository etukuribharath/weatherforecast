import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import DaysWeatherData from './daysweatherdata.jsx'
import WeatherCard from './weathercard.jsx'
injectTapEventPlugin();

ReactDOM.render(<MuiThemeProvider>
	<div>
     <AppBar style={{backgroundColor:"#3A606E",textAlign:"center"}}
      title="Weather Forcast Application"
      iconElementLeft={<IconButton></IconButton>}
      />
		<DaysWeatherData/>
		<WeatherCard/>
		</div>
  </MuiThemeProvider>,document.getElementById("root"));