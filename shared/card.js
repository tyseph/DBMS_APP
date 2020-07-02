import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        {props.children}
      </View>

    </View>
  )
}

const styles=StyleSheet.create ({
  card: {
    borderRadius: 6,
    elevation: 3,
  backgroundColor: '#6ED4C8',

  },
  cardContent: {

  }
});
