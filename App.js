import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Dimensions, Text, View, Image, Button, SafeAreaView, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Axios from 'axios';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <View style={{ flex: 1,alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
      <FlatList>1st</FlatList>
      <FlatList>2nd</FlatList>
    </View>
  );
}

const LogoImage = () => {
  return (
    
  <SafeAreaView style = {styles.container}>
  
    
<View style={styles.imageContainer}>

    <TouchableOpacity style = {styles.pressme}>
    <Text style={styles.buttontext}>Order
    </Text></TouchableOpacity>
    
    
    </View>

  </SafeAreaView>
 
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Snackfleet" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


//background color #101820ff spot color #fee715ff

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#101820ff',
    
  },
imageContainer: {
  zIndex:10000,
},
  pressme: {
    flex: 0,
    backgroundColor: '#fee715ff',
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    opacity: 60,
  },
  
  buttontext: {
    fontSize: 21,
  },
  
});


export default LogoImage;