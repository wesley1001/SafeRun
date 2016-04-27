import React from 'react-native';
var {
  View,
  Text,
  StyleSheet
} = React;

import HeadingText from './HeadingText';

var Heading = React.createClass({
  displayName: 'Heading',
  render() {
    return (
      <View style={styles.header}>
        <HeadingText>SafeRun</HeadingText>
      </View>
      );
  }
});

var styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  logo: {
    marginRight: 8,
    height: 40,
    width: 40
  }
});

export default Heading;