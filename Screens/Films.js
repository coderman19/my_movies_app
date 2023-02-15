import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Image, Button, Alert} from 'react-native';
// импорт компонентов
import Header from '../components/Header';
// импорт зависим

export default function Films() {
  return (
    <ImageBackground 
     // фоновое изображение
      source={require('../assets/img/mushrooms.jpg')}
      style={styles.bg}
    >
      <Header />  
      <Text
        style={styles.textsimple}
      >Awesome Films</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Button
        title="Нажать"
        onPress={() => Alert.alert('Поздравляю - Вы нажали на кнопку!')}
        style={styles.btn}
      />
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  tinyLogo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  textsimple: {
    fontSize: 24,
    textAlign: 'center',
    color: '#fff',
    paddingBottom: 10,
  },
  btn: {
    margin: 5,
    
  }
})