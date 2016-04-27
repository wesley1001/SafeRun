import React from 'react-native';
var {
  View,
  Text,
  StyleSheet
} = React;

import SmallText from './SmallText';

var InfoHeader = React.createClass({
  displayName: 'InfoHeader',
  render() {
    return (
      <View style={styles.header}>
        <SmallText>Facilitator:{' '+this.props.name}</SmallText>
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
  }
});

export default InfoHeader;