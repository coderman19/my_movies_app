import React from 'react';
import {TouchableOpacity, Text, StyleSheet } from 'react-native';

const TodoItem = ({item, deleteTodo}) => {
  return (
    <TouchableOpacity 
      style={styles.todo}
      onLongPress={() => deleteTodo(item.id)}
    >
      <Text style={styles.text}>
        {item.text}
      </Text>
      <TouchableOpacity
        onPress={() => deleteTodo(item.id)}
      >
        <Text>&#128465;</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default TodoItem;

const styles = StyleSheet.create({
  todo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 6,
    backgroundColor: '#fff',
    opacity: .8,
    margin: 4,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
  }
})