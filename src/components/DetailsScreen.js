import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function DetailsScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params || {};  
  return (
    <View style={styles.container}> 
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Text>Details Screen</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Third')}  
      >
        <Text>Third Screen</Text>
      </TouchableOpacity>
      <Button title="Atras" onPress={() => navigation.goBack()} />
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

export default DetailsScreen;
