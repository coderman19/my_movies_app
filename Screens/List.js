import React from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, FlatList, Text } from 'react-native';

// импорт компонентов
import Header from '../components/Header';



export default function List() {

  return (
    <SafeAreaView style={styles.app}>
      
      
      <ImageBackground
      // фоновое изображение
        source={require('../assets/img/samurai-cat.jpg')}
        style={styles.bg}
      >
      <Header />
      <Text>List</Text>
       </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    // height: '100%',
  },
  app: {
    flex: 1,
  }
})