import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';  
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}> 
      <Text>Home Screen</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Details', {
          itemId: 86,
          otherParam: 'Parametro de Home Screen',
        })}  
      >
        <Text>Details Screen</Text>
      </TouchableOpacity>

      
      
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

export default HomeScreen;
