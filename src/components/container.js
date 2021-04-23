import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import colors from '../utils/colors';

export default function Container(props) {
  const {ChangeColor} = props;

  return (
    <View >
      <View style={{flexDirection: 'row', height: '30%', width: '70%'}}>
        <TouchableOpacity
          //style={[styles.input, styles.inputP]}
          onPress={ChangeColor}
        />
        <TouchableOpacity
          //style={[styles.input, styles.inputP]}
          onPress={ChangeColor}
        />
        <TouchableOpacity
          //style={[styles.input, styles.inputP]}
          onPress={ChangeColor}
        />
      </View>
    </View>
  );
}
