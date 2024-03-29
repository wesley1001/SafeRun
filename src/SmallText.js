import React from 'react-native';
var {
  StyleSheet,
  Text,
  View
} = React;

import {fonts, scalingFactors} from './styles/fonts';
import Dimensions from 'Dimensions';
let {width} = Dimensions.get('window');

var SmallText = React.createClass({
  displayName: 'SmallText',

  propTypes: {
    style: Text.propTypes.style
  },

  render() {
    return (
      <Text style={[this.props.style, fonts.normal, scaled.normal]}>
        {this.props.children}
      </Text>
      );
  }
});

var scaled = StyleSheet.create({
  normal: {
    fontSize: width / scalingFactors.small
  }
});

export default SmallText;