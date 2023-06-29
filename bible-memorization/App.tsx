import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyVersesView } from './views/MyVersesView';
import { QuizView } from './views/QuizView';
import { VerseReviewView } from './views/VerseReviewView';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="My Verses" component={MyVersesView} />
        <Tab.Screen name="Quiz Me" component={QuizView} />
        <Tab.Screen name="Verse Review" component={VerseReviewView} />
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
