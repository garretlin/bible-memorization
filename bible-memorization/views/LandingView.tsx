import { StyleSheet, Text, View } from 'react-native';
import { LandingText } from '../components/LandingText';

export const LandingView = () => {
  return (
    <View style={styles.container}>
      <LandingText />
    </View>
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
