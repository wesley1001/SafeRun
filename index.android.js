/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

var React = require('react-native');
var MapView = require('react-native-maps');
var {AppRegistry} = React;

var SafeRun = require('./src/SafeRun');
AppRegistry.registerComponent('SafeRun', () => SafeRun);
