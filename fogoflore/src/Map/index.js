'use strict';

import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';

const { width, height } = Dimensions.get('window');
const mapImg = require('../images/dungeon1.jpg');

export default class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source = {mapImg} style={styles.image} blurRadius={15}></Image>
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
});
