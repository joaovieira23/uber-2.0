import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// 1) Set up redux

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lets build UBER!</Text>
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
