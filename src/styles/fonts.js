import { StyleSheet } from 'react-native';

var fonts = StyleSheet.create({
  small: {
    fontSize: 12,
    fontFamily: 'Avenir Light'
  },

  normal: {
    fontSize: 24,
    fontFamily: 'Avenir Medium'
  },

  alternate: {
    fontSize: 50,
    fontFamily: 'Avenir Heavy',
    color: '#FFFFFF'
  },

  big: {
    fontSize: 32,
    alignSelf: 'center',
    fontFamily: 'Avenir Medium'
  }
});

var scalingFactors = {
  small: 20,
  normal: 15,
  big: 10
};

module.exports = {fonts, scalingFactors};