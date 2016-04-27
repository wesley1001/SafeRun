
import React from 'react-native';
var {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ListView
} = React;

import MapView from 'react-native-maps';
import UserList from './../UserList'
import defaults from './../styles/defaults';
import HeadingText from './../HeadingText';
import Button from './../Button';
import NormalText from './../NormalText';
import colors from './../styles/colors';
import Dimensions from 'Dimensions';
let {width,height} = Dimensions.get('window');

var FacilitatorReady = React.createClass({
  displayName: 'FacilitatorReady',

 render(){
    return(
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <Button 
            style={styles.exitButton} 
            onPress={this.props.exit}>
          <NormalText>Exit</NormalText>
          </Button>
          <Button 
            style={styles.refreshButton} 
            onPress={this.props.refresh}>
          <NormalText>Refresh</NormalText>
          </Button>
        </View>

        <View style={styles.wrapper1}>
          <HeadingText>Observers: {this.props.observers.length}</HeadingText>
          <HeadingText>Drivers: {this.props.drivers.length}</HeadingText>
        </View>

        <View style={styles.wrapper2}>
            <UserList title={'Observers'} data={this.props.observers}/>
            <UserList title={'Drivers'} data={this.props.drivers}/>
        </View>
        <View style={styles.wrapper3}>
         <Button 
          style={styles.confirmButton} 
          onPress={this.props.next}>
          <NormalText>Start Run Time!</NormalText>
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
  wrapper1: {
    alignSelf: 'center',
    width: width*0.9,
  },
  
  wrapper2: {
    alignSelf: 'center',
    width: width*0.9,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

 exitButton: {
    borderRadius: 20,
    backgroundColor: colors.red,
    width: width*0.45,
    margin: defaults.margin,
    shadowColor: defaults.buttonShadowColor,
    shadowOpacity: defaults.buttonShadowOpacity,
 },
 refreshButton: {
    backgroundColor: colors.blue,
    width: width*0.45,
    borderRadius: 20,
    margin: defaults.margin,
    shadowColor: defaults.buttonShadowColor,
    shadowOpacity: defaults.buttonShadowOpacity,


 },
 wrapper3: {
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
 },
 buttonRow: {
    flexDirection: 'row'
  },
  
  dataRow: {
    margin: width*0.1,
    flexDirection: 'row'
  }
});

export default FacilitatorReady;
