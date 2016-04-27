var React = require('react-native');
var {
  StyleSheet,
  PropTypes,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} = React;

var MapView = require('react-native-maps');
import Geolocate from './Geolocate';
var { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 40.809733;
const LONGITUDE = -73.961646;
const LATITUDE_DELTA = 0.0122;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;
let id = 0;

function randomColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

var MainMap = React.createClass({
  getInitialState() {
    return {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      
      markers: [],

      center: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
      },

      location: { },

      radius: 1700,

      colorSet: true,

      myColor:  "rgba(200, 200, 0, 0.5)",

    };
  },
  componentDidMount() {
    console.log("MainMap component mounted");
      return (<Geolocate getLocation={this.getCurrentLocation} ref="myLocation"/>);
  },

  getCurrentLocation(data) {
      this.setState({
        location: data
      });
  },

  onMapPress(e) {
    this.state.colorSet ? this.setState({myColor:"rgba(0, 200, 0, 0.75)"}) : this.setState({myColor:"rgba(200, 0, 0, 0.75)"}); 
    this.state.colorSet ? this.setState({colorSet:false}) : this.setState({colorSet:true}); 
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
          initialRegion={this.state.region}
          onPress={this.onMapPress}
        >
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
