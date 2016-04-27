
import React from 'react-native';
var {
  View,
  ScrollView,
  StyleSheet,
} = React;

import NormalText from './NormalText';
import colors from './styles/colors';
import Dimensions from 'Dimensions';
let {width,height} = Dimensions.get('window');

var UserList = React.createClass({
  displayName: 'UserList',

 render(){ 
    var data = this.props.data;
    var content = data.map(function(obj,i){
          return (
              
              <NormalText key={i} style={obj.ready ? styles.confirmed: styles.unconfirmed}>{obj.name}</NormalText>
            );
        });   
    return (<ScrollView style={styles.scrollView}>
            <NormalText style={styles.title}>{this.props.title}</NormalText>
            {content}
            <NormalText>{'\n'}</NormalText>
            </ScrollView>);
   }   
});


var styles = StyleSheet.create({
  scrollView: {
    height: height*0.5,
    width: width*0.45,
    
  },
  confirmed: {
    color: colors.green
  },
  unconfirmed: {
    color: colors.red
  },
  title: {
    color: colors.blue
  },
});

export default UserList;
