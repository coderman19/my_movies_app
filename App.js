import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ImageBackgroundComponent, ImageBackground } from 'react-native';
// импорт сторонних компонентов
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// импорт компонентов
import Films from './Screens/Films';
import Todo from './Screens/Todo';
import List from './Screens/List';

//  вызов функции
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarAllowFontScaling: true,
        tabBarLabelStyle: {
          fontSize: 22,
        },
        tabBarIcon: () => {
          return
        },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'green',   
        }}
      >
        <Tab.Screen name="Заметки" component={Todo} />
        <Tab.Screen name="Фильмы" component={Films} />
        <Tab.Screen name="Список" component={List} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    textAlign: 'center',

  }
});
