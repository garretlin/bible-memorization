import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyVersesView } from './views/MyVersesView';
import { QuizView } from './views/QuizView';
import { VerseReviewView } from './views/VerseReviewView';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="My Verses" component={MyVersesView} 
        options={{
          tabBarLabel: 'My Verses',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open-page-variant" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Quiz Me" component={QuizView} 
        options={{
          tabBarLabel: 'Quiz Me',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="check-bold" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Verse Review" component={VerseReviewView} 
        options={{
          tabBarLabel: 'message-draw',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
