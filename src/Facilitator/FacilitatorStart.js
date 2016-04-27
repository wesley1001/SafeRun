
import React from 'react-native';
var {
  View,
  Text,
  StyleSheet
} = React;

import MainMap from './../MainMap';
import defaults from './../styles/defaults';
import HeadingText from './../HeadingText';
import Button from './../Button';
import NormalText from './../NormalText';
import colors from './../styles/colors';
import InfoHeader from './../InfoHeader';
import Timer from './../Timer';
import Dimensions from 'Dimensions';
let {width,height} = Dimensions.get('window');

var serverTime,localTime,timeDelta;

var FacilitatorStart = React.createClass({
  displayName: 'FacilitatorStart',

  propTypes: {
    totalTime: React.PropTypes.func.isRequired,
  },

  syncTime(){

    fetch('http://www.timeapi.org/utc/now.json')
    .then((response)=> response.json())
    .then((responseJSON) => {
      serverTime = new Date(responseJSON.dateString);
      localTime = new Date();
      timeDelta = localTime - serverTime;
      console.log(serverTime);
      console.log(localTime.getTime());
      console.log(timeDelta);
      //this.setState({startTime: new Date(1461532070218)});
    })
    .catch((error)=> {
      console.warn(error);
    });

  },

  componentWillMount(){
    this.syncTime();
  },

  render(){
    return(
      <View style={styles.container}>
        
        <InfoHeader
          name={this.props.name} />
        <View style={styles.buttonRow}>
          <Button 
            style={styles.endRunButton} 
            onPress={this.props.endRun}>
          <NormalText>End Run</NormalText>
          </Button>
          <Button 
            style={styles.restartButton} 
            onPress={this.props.restartTime}>
          <NormalText ref="welcome">Restart Time</NormalText>
          </Button>
        </View>

        <View style={styles.map}>
        <MainMap
          observers={this.props.observers}
          drivers={this.props.drivers} />
        </View>

        <View style={styles.timer}>
          <Timer
            totalTime={this.props.totalTime}
            timeDelta={timeDelta}
            restart={this.props.startTime}/>
        </View>

      </View>
      );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: defaults.marginTop,
    height: height-defaults.marginTop,
    width: width
  },
  map: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    bottom: 70,
  },
  timer: {
    position: 'absolute',
    height: 70,
    width: width,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    bottom: 0
  },
  buttonRow: {
    flexDirection: 'row'
  },
  endRunButton: {
    borderRadius: 20,
    backgroundColor: colors.red,
    width: width*0.45,
    margin: defaults.margin,
    shadowColor: defaults.buttonShadowColor,
    shadowOpacity: defaults.buttonShadowOpacity,
 },
 restartButton: {
    backgroundColor: colors.blue,
    width: width*0.45,
    borderRadius: 20,
    margin: defaults.margin,
    shadowColor: defaults.buttonShadowColor,
    shadowOpacity: defaults.buttonShadowOpacity,
 },
 
});

export default FacilitatorStart;
