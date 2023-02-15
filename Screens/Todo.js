import React from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, FlatList, Text } from 'react-native';
// импорт компонентов
import Form from '../components/Form';
import Header from '../components/Header';
import TodoItem from '../components/TodoItem';

export default function Todo() {

  const [todoItems, setTodoItems] = React.useState([])

  // функция добавления элементов Todo
  const addTodo = (newItem) => {
    setTodoItems([
      ...todoItems,
      {...newItem}
    ])
  }

  // функция удаления элементов Todo
  const deleteTodo = (id) => {
    setTodoItems((newList) => {
      return newList.filter(todoItems => id != todoItems.id)
    })
  }

  return (
    <SafeAreaView style={styles.app}>
      
      
      <ImageBackground
      // фоновое изображение
        source={require('../assets/img/mollusk.jpg')}
        style={styles.bg}
      >
      <Header />
      <Form addTodo={addTodo}/>

      {/* счетчик задач */}
      {
        todoItems.length 
        ? <Text
          style={styles.counter}
        > Всего задач: {todoItems.length}</Text>
        : null 
      }

      <FlatList 
        data={todoItems}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TodoItem 
            item={item}
            deleteTodo={deleteTodo}
          />
        )}
      />
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
  },
  counter: {
    color: '#fff',
    fontSize: 18,
    padding: 5,
  }
})