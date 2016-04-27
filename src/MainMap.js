import React from 'react';
var ReactNative = require('react-native');
var {
  StyleSheet,
  PropTypes,
  View,
  Dimensions,
} = ReactNative;

var MapView = require('react-native-maps');
var { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 41.809733;   //CU Campus
const LONGITUDE = -73.961646;  
const LATITUDE_DELTA = 0.0122;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;
let id = 0;

function randomColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

var MainMap = React.createClass({
  watchID: (null: ?number),
  
  getInitialState() {
    return {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },

      newRegion: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [],

      initialRegion: {},

    };
  },
  componentDidMount() {
    console.log("MainMap component mounted");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({region:{
                              latitude: position.coords.latitude,
                              longitude: position.coords.longitude,
                              latitudeDelta: LATITUDE_DELTA,
                              longitudeDelta: LONGITUDE_DELTA}});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: false, timeout: 5000, maximumAge: 5000}
    );

    // this.watchID = navigator.geolocation.watchPosition((position) => {
        // this.setState({region:{
        //                       latitude: position.coords.latitude,
        //                       longitude: position.coords.longitude,
        //                       latitudeDelta: LATITUDE_DELTA,
        //                       longitudeDelta: LONGITUDE_DELTA}});
    // });
  },


  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  },

  getCurrentLocation(data) {
      this.setState({
        location: data
      });
  },

  logData(data){
    console.log(data);
  },

  onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          color: randomColor(),
        },
      ],
    });
  },

  render() {
    return (
     
        <MapView
          style={styles.map}
          mapType="standard"
          initialRegion={this.state.region}
          region={this.state.region}
          showUserLocation={true}
          onRegionChangeComplete={this.logData}
          onPress={this.onMapPress}>
          {this.state.markers.map
          (marker => (
            <MapView.Marker
              key={marker.key}
              coordinate={marker.coordinate}
              pinColor={marker.color}
              title="Name"
              description="Role" 
              onSelect={(e) => console.log('onSelect', e)}
              onDrag={(e) => console.log('onDrag', e)}
              onDragStart={(e) => console.log('onDragStart', e)}
              onDragEnd={(e) => console.log('onDragEnd', e)}
              onPress={(e) => console.log('onPress', e)}
              draggable/> ))}


        </MapView>
        
     
    );
  },
});

var styles = StyleSheet.create({
  
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
   
});

module.exports = MainMap;
