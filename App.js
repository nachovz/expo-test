import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import styless from "./app.styl";

console.log(styless);

function HomeScreen({ navigation }) {
  return (
    <View style={{...styles.container, ...styless["my-dashed-class"],...styless["some-button"]}}>
			<Text style={styless["some-button"]} >Open up App.js to start wo!</Text>
			<Button  title="Hello" onPress={() => Alert.alert('Left button pressed')}/>
			<Button
				style={styles.another}
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
			
		</View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
			<Button
				style={styless["my-dashed-class"]}
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
			<StatusBar style="auto" />
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
	another: {

	}
});
