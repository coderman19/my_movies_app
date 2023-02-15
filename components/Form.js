import React from 'react';
import { View, StyleSheet, TextInput, Pressable, Text } from 'react-native';
import uuid from 'react-native-uuid';
const Form = ({addTodo}) => {

  const [inputValue, setInputValue] = React.useState('');

  return (
    <View>
      <TextInput 
        placeholder='Введите задачу:'
        style={styles.textInput}
        onChangeText={text => setInputValue(text)}
        value={inputValue}
      />
      <Pressable 
        title='Добавить задачу'
        disabled={!inputValue}
        style={styles.btn}
        onPress={() => {
          addTodo({
            id: uuid.v4(),
            text: inputValue,
          })
          // очищаем поле ввода
          setInputValue('')
        }}
      >
        <Text
          style={styles.btnText}
        >добавить</Text>
      </Pressable>
    </View>
  )
}

export default Form;

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    margin: 19,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2},
    shadowOpacity: .3,
    shadowRadius: 6,
  },
  btn: {
    margin: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    // paddingHorizontal: 5,
    borderRadius: 5,
    // elevation: 1,
    backgroundColor: 'lightblue',
  },
  btnText: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
  }
})