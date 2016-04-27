
import React from 'react-native';
var {
  View,
  Text,
  StyleSheet,
  ScrollView
} = React;

import defaults from './../styles/defaults';
import HeadingText from './../HeadingText';
import ActiveRunList from './../ActiveRunList';
import Button from './../Button';
import NormalText from './../NormalText';
import SmallText from './../SmallText';
import colors from './../styles/colors';
import Dimensions from 'Dimensions';
let {width,height} = Dimensions.get('window');

var Observer = React.createClass({
  displayName: 'Observer',
  getInitialState(){
    return{
      name: '',
      selected: false
    }
  },
  updateSelection(name){
    console.log(name);
    this.props.getSelection(name);
    this.setState({name: name, selected: true});
  },
  render() {
    var button = null;
    this.state.selected ? 
    button = <Button 
          style={styles.confirmButton} 
          onPress={this.props.next}>
          <NormalText>Join {this.state.name}'s Run!</NormalText>
        </Button>
    :
    button = null;
    return (
      <View style={styles.container}>
        <Button 
          style={styles.backButton} 
          onPress={this.props.back}>
        <NormalText>Back</NormalText>
        </Button>
        <View style={styles.wrapper}>
          <HeadingText>Observer</HeadingText>
          <NormalText>
           Description of Role Description of Role Description of Role{'\n'}
           </NormalText>
        </View>
        <View style={styles.wrapper2}>
          <ActiveRunList
            data={this.props.data}
            onSelect={this.updateSelection} />
        </View>
        <View style={styles.wrapper3}>
         {button}
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
    backgroundColor: 'blue',
    alignSelf: 'center',
    width: width,
    height: height*0.45
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
   wrapper3: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
});

export default Observer;
