import React from 'react-native';
var {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Navigator,
  BackAndroid
} = React;

import colors from './styles/colors';
import defaults from './styles/defaults';
import RoleSelection from './RoleSelection'
import Facilitator from './Facilitator'
import FacilitatorReady from './Facilitator/FacilitatorReady'
import FacilitatorStart from './Facilitator/FacilitatorStart'
import FacilitatorExit from './Facilitator/FacilitatorExit'
import FacilitatorEndRun from './Facilitator/FacilitatorEndRun'
import FacilitatorSummary from './Facilitator/FacilitatorSummary'
import Driver from './Driver'
import DriverStart from './Driver/DriverStart'
import Observer from './Observer'
import ObserverReady from './Observer/ObserverReady'
import Exit from './Exit'
import Timer from './Timer'
import Geolocate from './Geolocate'

var _navigator; 
var sessionIncKey = 0;
var { width, height } = Dimensions.get('window');
var dismissKeyboard = require('dismissKeyboard');

var Observers = [{ready: true, name :"Mike"},{ready:false,name:"Scott"}, {ready:false,name:"Suhani"}, {ready:true,name:"Angela"}, {ready:true,name:"Khal"}, {ready:true,name:"Brian"}, {ready:false,name:"Joe"}, {ready:true,name:"Tim"}, {ready: true, name :"Mike"},{ready:false,name:"Scott"}, {ready:false,name:"Suhani"}, {ready:true,name:"Angela"}, {ready:true,name:"Khal"}, {ready:true,name:"Brian"}, {ready:false,name:"Joe"}, {ready:true,name:"Tim"}, {ready: true, name :"Mike"},{ready:false,name:"Scott"}, {ready:false,name:"Suhani"}, {ready:true,name:"Angela"}, {ready:true,name:"Khal"}, {ready:true,name:"Brian"}, {ready:false,name:"Joe"}, {ready:true,name:"Tim"}, {ready: true, name :"Mike"},{ready:false,name:"Scott"}, {ready:false,name:"Suhani"}, {ready:true,name:"Angela"}, {ready:true,name:"Khal"}, {ready:true,name:"Brian"}, {ready:false,name:"Joe"}, {ready:true,name:"Tim"}, {ready: true, name :"Mike"},{ready:false,name:"Scott"}, {ready:false,name:"Suhani"}, {ready:true,name:"Angela"}, {ready:true,name:"Khal"}, {ready:true,name:"Brian"}, {ready:false,name:"Joe"}, {ready:true,name:"Tim"}, {ready: true, name :"Mike"},{ready:false,name:"Scott"}, {ready:false,name:"Suhani"}, {ready:true,name:"Angela"}, {ready:true,name:"Khal"}, {ready:true,name:"Brian"}, {ready:false,name:"Joe"}, {ready:true,name:"Tim"}, {ready: true, name :"Mike"},{ready:false,name:"Scott"}, {ready:false,name:"Suhani"}, {ready:true,name:"Angela"}, {ready:true,name:"Khal"}, {ready:true,name:"Brian"}, {ready:false,name:"Joe"}, {ready:true,name:"Tim"}, {ready: true, name :"Mike"},{ready:false,name:"Scott"}, {ready:false,name:"Suhani"}, {ready:true,name:"Angela"}, {ready:true,name:"Khal"}, {ready:true,name:"Brian"}, {ready:false,name:"Joe"}, {ready:true,name:"Tim"}, {ready: true, name :"Mike"},{ready:false,name:"Scott"}, {ready:false,name:"Suhani"}, {ready:true,name:"Angela"}, {ready:true,name:"Khal"}, {ready:true,name:"Brian"}, {ready:false,name:"Joe"}, {ready:true,name:"Tim"}];
var Drivers = [{ready: true, name :"Gail"},{ready:true,name:"Somdeep"},{ready: true, name :"Gail"},{ready:true,name:"Somdeep"},{ready: true, name :"Gail"},{ready:true,name:"Somdeep"},{ready: true, name :"Gail"},{ready:true,name:"Somdeep"},{ready: true, name :"Gail"},{ready:true,name:"Somdeep"},{ready: true, name :"Gail"},{ready:true,name:"Somdeep"},{ready: true, name :"Gail"},{ready:true,name:"Somdeep"},{ready: true, name :"Gail"},{ready:true,name:"Somdeep"},{ready: true, name :"Gail"},{ready:true,name:"Somdeep"},{ready: true, name :"Gail"},{ready:true,name:"Somdeep"},{ready: true, name :"Gail"},{ready:true,name:"Somdeep"},{ready: true, name :"Gail"},{ready:true,name:"Somdeep"},{ready: true, name :"Gail"},{ready:true,name:"Somdeep"}];
// var Facilitators = [{name: "Scott"},{name: "Suhani"},{name: "Angela"},{name: "Khal"},{name: "Gail"},{name: "Somdeep"},];
var Facilitators = ["Scott","Suhani","Angela","Khal","Gail","Somdeep"];

var SafeRun = React.createClass({
	displayName: 'SafeRun',

	getInitialState() {
	    return {
	      name: 'TestName',
	      position: null,
	      role: null,
	      startTime: null,
	      totalTime: null,
	      facilitatorSelected: null,
	      facilitators: Facilitators,
	      observers: Observers,
	      drivers: Drivers,
	    };
	},
	goToTop(){
		// this.setState(this.getInitialState()); TODO: Make this work/ necessary?
		this.setState({name: ''});
		sessionIncKey++; //Used to refresh key which alerts RN to rerender the component
		this.refs.navigator.resetTo({
			route: 'roleSelection'
		});
	},

	back(){
		this.refs.navigator.pop();
	},

	setName(name){
		this.setState({name: name});
	},

	roleSelect(){
		this.refs.navigator.push({
			name: 'roleSelection'
		});
	},

	facilitator(){
		if(this.state.name!==''){
			dismissKeyboard();
			this.setState({role: 'facilitator'});
			this.refs.navigator.push({
				route: 'facilitator'
			});
		}
		else{
			console.log("NO NAME ENTERED!");
		}
	},

	driver(){
		if(this.state.name!==''){
			dismissKeyboard();
			this.setState({role: 'driver'});
			this.refs.navigator.push({
				route: 'driver'
			});
		}
		else{
			console.log("NO NAME ENTERED!");
		}
	},
	observer(){
		if(this.state.name!==''){
			dismissKeyboard();
			this.setState({role: 'observer'});
			this.refs.navigator.push({
				route: 'observer'
			});
		}
		else{
			console.log("NO NAME ENTERED!");
		}
	},
	getTotalTime(totalTime){
		this.setState({totalTime: totalTime});
	},
	getFacilitatorSelected(name){
		this.setState({facilitatorSelected: name});
		console.log(this.state.facilitatorSelected);
	},
	facilitatorReady(){
		//POPULATE DBASE / CREATE RUN HERE
		this.refs.navigator.replace({
			route: 'facilitatorReady'
		});
	},
	facilitatorStart(){
		//API CALL to START RUN TIME 
		this.refs.navigator.replace({
			route: 'facilitatorStart'
		});
	},
	facilitatorExit(){
		// this.refs.roleSelection.clearText(); TODO: Make this work
		this.refs.navigator.push({
			route: 'facilitatorExit'
		});
	},
	facilitatorEndRun(){
		this.refs.navigator.push({
			route: 'facilitatorEndRun'
		});
	},
	facilitatorSummary(){
		this.refs.navigator.resetTo({
			route: 'facilitatorSummary'
		});
	},
	driverStart(){
		this.refs.navigator.push({
			route: 'driverStart'
		});
	},
	exit(){
		this.refs.navigator.push({
			route: 'exit'
		});
	},
	observerReady(){
		this.refs.navigator.replace({
			route: 'observerReady'
		});
	},
	observerStart(){
		//update Database with inPosition!
		console.log("observerReadytoStartnow");
	},

	_renderScene(def){
		switch(def.route){
			case 'timer':
				return <Timer/>;

			case 'roleSelection':
				return <RoleSelection 
						key={sessionIncKey}
						ref="roleSelection"
						facilitator={this.facilitator}
						driver={this.driver}
						observer={this.observer}
						setName={this.setName}
						/>;
			
			case 'facilitator':
				return <Facilitator
						back={this.back}
						next={this.facilitatorReady}
						/>;
			
			case 'facilitatorReady':
				return <FacilitatorReady
						name={this.state.name}
						observers={this.state.observers}
						drivers={this.state.drivers}

						exit={this.facilitatorExit}
						refresh={this.facilitatorReady}
						next={this.facilitatorStart}/>;

			case 'facilitatorExit':
				return <FacilitatorExit
						back={this.back} 
						exit={this.goToTop} />;
			
			case 'facilitatorStart':
				return <FacilitatorStart
						name={this.state.name}
						observers={this.state.observers}
						drivers={this.state.drivers}
						startTime={this.state.startTime}
						totalTime={this.getTotalTime}
						position={this.state.position}

						endRun={this.facilitatorEndRun}
						restartTime={this.facilitatorStart}/>;

			case 'facilitatorEndRun':
				return <FacilitatorEndRun
						back={this.back}
						confirm={this.facilitatorSummary} />;

			case 'facilitatorSummary':
				return <FacilitatorSummary
						name={this.state.name}
						totalTime={this.state.totalTime}

						exit={this.goToTop} />

			case 'driver':
				return <Driver
						data={this.state.facilitators}

						getSelection={this.getFacilitatorSelected}
						next={this.driverStart}
						back={this.back}/>;

			case 'driverStart':
				return <DriverStart
						facilitatorSelected={this.state.facilitatorSelected}
						name={this.state.name}
						observers={this.state.observers}
						drivers={this.state.drivers}
						startTime={this.state.startTime}
						totalTime={this.getTotalTime}
						position={this.state.position}

						exit={this.exit}
						 />;
			
			case 'observer':
				return <Observer
						data={this.state.facilitators}

						getSelection={this.getFacilitatorSelected}
						next={this.observerReady}
						back={this.back}/>;

			case 'observerReady':
				return <ObserverReady
						facilitatorSelected={this.state.facilitatorSelected}
						name={this.state.name}
						observers={this.state.observers}
						drivers={this.state.drivers}
						startTime={this.state.startTime}
						totalTime={this.getTotalTime}
						position={this.state.position}

						next={this.observerStart}
						exit={this.exit}
						 />;

			case 'exit':
				return <Exit
						back={this.back} 
						exit={this.goToTop}	/>;

			case 'Geolocate':
				return <Geolocate/>;

			default:
				console.error('Unexpected Route:' + def.route);
		}

		return <Text>roleSelection Backup</Text>;
	},
  
	render() {
		return (
			<View style={styles.container}>
				<Navigator
					ref='navigator'
					initialRoute={{route: 'facilitatorStart'}}
					renderScene={this._renderScene}/>
			</View>
		);
	},
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: defaults.marginTop,
    height: height-defaults.marginTop,
    width: width,
    backgroundColor: 'white'
  }
});

module.exports = SafeRun;
