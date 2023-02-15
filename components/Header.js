import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text
        style={styles.headText}
      >Awesome React App</Text>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 80,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  headText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'orange',
  }
})