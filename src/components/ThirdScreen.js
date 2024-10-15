import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';  
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ThirdScreen({ navigation }) {  
  return (
    <View style={styles.container}> 
      <Text>Third Screen</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}  
      >
        <Text>Home Screen</Text>
      </TouchableOpacity>

      <Button
        title="Primera pantalla"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default ThirdScreen;
