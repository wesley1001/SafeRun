
import React from 'react-native';
var {
  View,
  Text,
  StyleSheet
} = React;

import defaults from './../styles/defaults';
import HeadingText from './../HeadingText';
import Button from './../Button';
import NormalText from './../NormalText';
import colors from './../styles/colors';
import Dimensions from 'Dimensions';
let {width,height} = Dimensions.get('window');

var FacilitatorExit = React.createClass({
  displayName: 'FacilitatorExit',
  render(){
    return(
       <View style={styles.container}>
        <Button 
          style={styles.backButton} 
          onPress={this.props.back}>
        <NormalText>Back</NormalText>
        </Button>
        <View style={styles.wrapper}>
          <HeadingText>{'\n'}Exit?{'\n'}</HeadingText>
          <NormalText>This will end the run!</NormalText>
          
        </View>
        <View style={styles.wrapper2}>
         <Button 
          style={styles.confirmButton} 
          onPress={this.props.exit}>
          <NormalText>Yes</NormalText>
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
 backButton: {
    backgroundColor: colors.blue,
    width: width*defaults.backButtonWidthPercent,
    height: height*defaults.backButtonHeightPercent,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    left: defaults.backButtonLeft,
    margin: defaults.backButtonMargin,
    shadowColor: defaults.buttonShadowColor,
    shadowOpacity: defaults.buttonShadowOpacity,

 },
 wrapper2: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
 confirmButton: {
    backgroundColor: colors.red,
    borderRadius: defaults.confirmButtonRadius,
    height: height*defaults.confirmButtonHeightPercent,
    width: width*defaults.confirmButtonWidthPercent,
    marginBottom: 10,
    shadowColor: defaults.buttonShadowColor,
    shadowOpacity: defaults.buttonShadowOpacity,
   }
});

export default FacilitatorExit;
