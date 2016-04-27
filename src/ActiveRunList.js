
import React from 'react-native';
var {
  View,
  Text,
  ScrollView,
  ListView,
  TouchableHighlight,
  StyleSheet,
} = React;

import NormalText from './NormalText';
import colors from './styles/colors';
import Dimensions from 'Dimensions';
let {width,height} = Dimensions.get('window');

var GiftedListView = require('react-native-gifted-listview');

//GiftedListView code from: https://github.com/FaridSafi/react-native-gifted-listview
var ActiveRunList = React.createClass({
  displayName: 'ActiveRunList',
/**
   * Will be called when refreshing
   * Should be replaced by your own logic
   * @param {number} page Requested page to fetch
   * @param {function} callback Should pass the rows
   * @param {object} options Inform if first load
   */
  _onFetch(page = 1, callback, options) {
    setTimeout(() => {
      var rows = this.props.data;//['row '+((page - 1) * 3 + 1), 'row '+((page - 1) * 3 + 2), 'row '+((page - 1) * 3 + 3)];
      if (page === 10) {
        callback(rows, {
          allLoaded: true, // the end of the list is reached
        });        
      } else {
        callback(rows);
      }
    }, 1000); // simulating network fetching
  },


  /**
   * When a row is touched
   * @param {object} rowData Row data
   */
  _onPress(rowData) {
    console.log(rowData+' pressed');
    this.props.onSelect(rowData);
  },

  /**
   * Render a row
   * @param {object} rowData Row data
   */
  _renderRowView(rowData) {
    return (
      <TouchableHighlight
        style={styles.row}
        underlayColor='#c8c7cc'
        onPress={() => this._onPress(rowData)}>
          <View>
            <NormalText>{rowData}</NormalText>
          </View>
      </TouchableHighlight>
    );
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}><NormalText>{' '}Select Facilitator</NormalText></View>
        <GiftedListView
          rowView={this._renderRowView}
          onFetch={this._onFetch}
          firstLoader={true} // display a loader for the first fetching
          pagination={false} // enable infinite scrolling using touch to load more
          refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
          withSections={false} // enable sections
          customStyles={{
            paginationView: {
              backgroundColor: '#eee',
            },
          }}

          refreshableTintColor="blue"
        />
      </View>
    );
  }
});

var styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: 50
  },
  navBar: {
    backgroundColor: colors.blue,
    alignItems: 'center'
  },
  row: {
    alignItems: 'center',
    padding: 10,
  },
};

export default ActiveRunList;
