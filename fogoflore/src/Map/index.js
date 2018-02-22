'use strict';

import React, { Component } from 'react';
import { Alert, Dimensions, StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import Grid from '.';

const { width, height } = Dimensions.get('window');
const mapImg = require('../images/dungeon1.jpg');
const fogImg = require('../images/fog.jpg');


export default class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source = {mapImg} style={styles.image}></Image>
        <Image source = {fogImg} style={styles.fogimage}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width,
    height,
    justifyContent: 'center',
  },
  fogimage: {
    zIndex: 1,
  },
});
