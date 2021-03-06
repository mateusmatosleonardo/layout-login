import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet,
   Text, 
   View,
   ImageBackground,
   TextInput,
   TouchableOpacity
} from 'react-native';
import Button from './src/components/Button';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require('./assets/bg.jpg')}
        style={styles.background}
      >
        <View style={styles.loginContainer}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '700',
              padding: 30
            }}
          >
            Login
          </Text>
          <TextInput
            placeholder="Usuário"
            style={styles.input}
          />
          <TextInput
            placeholder="Senha"
            style={styles.input}
          />
          <Button/>
          <TouchableOpacity
          >
            <Text
              style={{
                fontSize: 12,
                marginTop: 3,
                textDecorationLine: 'underline',
                color: '#222'
              }}
              >
                Cadastre-se!
            </Text>
          </TouchableOpacity>
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
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 300,
    height: 60,
    borderRadius: 12,
    paddingLeft: 10,
    marginBottom: 30
  }
});
