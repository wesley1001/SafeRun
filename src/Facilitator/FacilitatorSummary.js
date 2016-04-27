
import React from 'react-native';
var {
  View,
  Text,
  StyleSheet
} = React;

import defaults from './../styles/defaults';
import HeadingText from './../HeadingText';
import InfoHeader from './../InfoHeader';
import Button from './../Button';
import NormalText from './../NormalText';
import colors from './../styles/colors';
import Dimensions from 'Dimensions';
let {width,height} = Dimensions.get('window');

var formatTime = require('minutes-seconds-milliseconds');

var FacilitatorSummary = React.createClass({
  displayName: 'FacilitatorSummary',
  render(){
    return(
       <View style={styles.container}>

          <InfoHeader name={this.props.name} />
       
        <View style={styles.wrapper}>
          <HeadingText>{'\n'}Run Complete{'\n'}</HeadingText>
          <NormalText>
          Time Elapsed: {formatTime(this.props.totalTime)}{'\n'}
          Summary Details{'\n'}
          Summary Details{'\n'}
          Summary Details{'\n'}</NormalText>
          
        </View>
        <View style={styles.wrapper2}>
         <Button 
          style={styles.confirmButton} 
          onPress={this.props.exit}>
          <NormalText>Done</NormalText>
        </Button>
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
  wrapper: {
    alignSelf: 'center',
  },
 
 wrapper2: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
 confirmButton: {
    backgroundColor: colors.green,
    borderRadius: defaults.confirmButtonRadius,
    height: height*defaults.confirmButtonHeightPercent,
    width: width*defaults.confirmButtonWidthPercent,
    marginBottom: 10,
    shadowColor: defaults.buttonShadowColor,
    shadowOpacity: defaults.buttonShadowOpacity,
   }
});

export default FacilitatorSummary;
