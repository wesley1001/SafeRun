import React from 'react';
import ReactNative from 'react-native';
var {
  StyleSheet,
  Text,
  View,
} = ReactNative;

var Geolocate = React.createClass({
  watchID: (null: ?number),

  getInitialState: function() {
    return {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
    };
  },

  componentDidMount: function() {
    console.log("Geolocate mount started");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        console.log(position);
        this.setState({initialPosition});
        this.props.getLocation(position);
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({lastPosition});
    });
  },

  componentWillUnmount: function() {
    navigator.geolocation.clearWatch(this.watchID);
  },

  render: function() {
    return (
      <View>
        <Text>
          <Text>Initial position: </Text>
          {this.state.initialPosition}
        </Text>
        <Text>
          <Text>Current position: </Text>
          {this.state.lastPosition}
        </Text>
      </View>
    );
  }
});

export default Geolocate;