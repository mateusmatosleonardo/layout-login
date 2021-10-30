import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet,
   Text, 
   View,
   ImageBackground
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require('./assets/bg.jpg')}
        style={styles.background}
      >
        <View style={styles.loginContainer}>

        </View>
      </ImageBackground>
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
  background: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginContainer: {
    width: 350,
    height: 400,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20
  }
});
