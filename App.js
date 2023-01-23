import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, {useState} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Button from './components/Button';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const imageForPage = require('./assets/images/concert.png');

export default function App() {
  const [text, onChangeText] = React.useState();
  const ticketPrice = 99.99;
  const [state, setVisibility] = useState(false);

  const visibleStyles = state ? styles.visible : undefined;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ticket Vault</Text>
      <TextInput style={styles.input}
        placeholder="Number of Tickets"
        onChangeText={onChangeText}
      />
              <View style={styles.footerContainer}>
                <Button theme="primary" label="Find The Cost" onPress={() => {setVisibility(true);}} style={styles.Button} />
        </View>
      <StatusBar style="auto" />
      <View>
        <Text style={[styles.total, visibleStyles]}>Ticket Cost: ${(text * ticketPrice).toFixed(2)}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={imageForPage} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  total: {
    fontSize: 30,  
    fontWeight: 'bold',
    display: 'none',
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 425,
    height: 250,
  },
  footerContainer:{
    flex: 1 / 3,
    alignItems: 'center',
  },
  input: {
    height: 60,
    width: 275,
    fontSize: 30,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 12,
  },
  visible: {
    display: 'flex'
  },
});
