var React = require('react-native');
var {
  StyleSheet,
  PropTypes,
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} = React;

import NormalText from './NormalText';

var formatTime = require('minutes-seconds-milliseconds');

var Timer = React.createClass({
  displayName: 'Timer',

  propTypes: {
    totalTime: React.PropTypes.func.isRequired,
  },
  getInitialState(){
    return {
      timeElapsed: null,
      running: false,
      startTime: null,
    }
  },

  updateTotalTime(){
  	this.props.totalTime(this.state.timeElapsed);
  },

  componentDidMount(){
  	this.startTimer();
  },

  componentWillUnmount(){
  	  this.updateTotalTime();
      clearInterval(this.interval);
      this.setState({running: false});
  },
  render(){
    return <View style= {styles.container}>
	      		<NormalText>Elapsed Time:
	        	{' '}{formatTime(this.state.timeElapsed)}
	    	  	</NormalText>
		   </View>
  },

  startTimer(){    
    {this.setState({startTime: new Date()});}
    this.interval = setInterval(() =>{
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
      });
    }, 30);

  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  
  timerWrapper: { //red
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
});


module.exports = Timer;
