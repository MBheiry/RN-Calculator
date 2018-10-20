import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calc from './_src/Calc';


export default class App extends React.Component {
  render() {
    return (
      <View style={css.container}>
        
        
        <Calc />

      </View>
    );
  }
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: 'lightgray',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
