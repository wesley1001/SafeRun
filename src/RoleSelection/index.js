import React from 'react-native';
var {
  View,
  Text,
  TextInput,
  StyleSheet
} = React;

import defaults from './../styles/defaults';
import HeadingText from './../HeadingText';
import Heading from './../Heading';
import Button from './../Button';
import NormalText from './../NormalText';
import colors from './../styles/colors';
import Dimensions from 'Dimensions';
let {width, height} = Dimensions.get('window');


var RoleSelection = React.createClass({
  displayName: 'RoleSelection',
  
  propTypes: {
    facilitator: React.PropTypes.func.isRequired,
    driver: React.PropTypes.func.isRequired,
    observer: React.PropTypes.func.isRequired,
  },

  getInitialState() {
    return {
      placeHolder: 'Enter Name Here'
    };
  },

  clearText(){
    this._textInput.setNativeProps({text: ''});
  },

  _handleTextSubmit(event) {
    var name = event.nativeEvent.text;
    if(name!==''){
      this.props.setName(name);
    }
    else {
      console.log("Nothing Entered");
    }
  },

  _handleTextChange(name) {
    if(name!=='')
      this.props.setName(name);
  },

  componentWillUnmount() {
    console.log("RoleSelection will unmount");
    this.clearText();
  },

  render() {
    return (
      <View style={styles.container}>
        <Heading/>
          <TextInput
                   ref={component => this._textInput = component}
                   style={styles.input}
                   autoCorrect={false}
                   placeholder={this.state.placeHolder}
                   onChangeText={this._handleTextChange}
                   onSubmitEditing={this._handleTextSubmit}
                   onEndEditing={this._handleTextSubmit}/>

        <Button 
          style={[styles.roleButton,styles.FacilitatorButton]} 
          onPress={this.props.facilitator}>
        <NormalText>Facilitator</NormalText>
        </Button>

        <Button 
          style={[styles.roleButton,styles.DriverButton]} 
          onPress={this.props.driver}>
        <NormalText>Driver</NormalText>
        </Button>

        <Button 
          style={[styles.roleButton,styles.ObserverButton]} 
          onPress={this.props.observer}>
        <NormalText>Observer</NormalText>
        </Button>

      </View>
      );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: defaults.marginTop,
    height: height-defaults.marginTop,
    width: width,
    backgroundColor: 'white'

  },
  roleButton: {
    height: height*defaults.roleButtonHeightPercent,
    width: width*defaults.roleButtonWidthPercent,
    alignSelf: 'center',
    borderRadius: defaults.roleButtonRadius,
    margin: defaults.roleButtonMargin,

  },
  FacilitatorButton: {
    backgroundColor: colors.green,
    shadowColor: defaults.buttonShadowColor,
    shadowOpacity: defaults.buttonShadowOpacity,
  },
  DriverButton: {
    backgroundColor: colors.blue,
    shadowColor: defaults.buttonShadowColor,
    shadowOpacity: defaults.buttonShadowOpacity,

  },
  ObserverButton: {
    backgroundColor: colors.red,
    shadowColor: defaults.buttonShadowColor,
    shadowOpacity: defaults.buttonShadowOpacity,

  },

  input: {
    height: height*0.10,
    width: width*0.9, 
    alignSelf: 'center',
    fontSize: defaults.textInputFontSize,
    borderRadius: 20,
    borderColor: colors.blue, 
    borderWidth: 1,
    padding: 10
  },

});

export default RoleSelection;
