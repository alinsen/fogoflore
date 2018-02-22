'use strict';

import React, { Component } from 'react';
import { Alert, Dimensions, StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import Map from '.';

const { width, height } = Dimensions.get('window');


export default class Grid extends Component {
  render() {
    return (
      <View style={styles.container}>
        newGrid = createGrid();
        for(var i = 0; i < sizeof(newGrid); i++){
          for(var j = 0; i < sizeof(newGrid[i]); j++){
             <View style={styles.grid}>
             </View>
          }
        }

      </View>
    );
  }

  createGrid(){
    let num = 0;
    let grid = [];
    for(var i = 0; i < 4; i++){
      let col = [];
      for(var j = 0; j < 4; j++){
        col[j] = num++;
      }
      grid[i] = col;
    }
    return grid;
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: #FFF;
  },
});
