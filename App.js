import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import LoginScreen from "./screens/login";
import Storybook from "./screens/storybook";

import styless from "./assets/styles/app.styl";
import colors from "./assets/styles/colors.json";

console.log(styless);

const PtoTheme = {
	dark: false,
	colors: {
		primary: colors['color-primary'],
		background: colors['color-bg-verylight'],
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
	another: {

	}
});

function HomeScreen({ navigation }) {
  return (
    <View style={{...styles.container}}>
			<Text>Open up App.js to start wo!</Text>
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
		<NavigationContainer theme={PtoTheme}>
			<Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Details" component={DetailsScreen} />
				<Stack.Screen 
					name="Login" 
					options={{headerShown:false}} 
					component={LoginScreen}
				/>
				<Stack.Screen
					name="Storybook"
					component={Storybook}
				/>
      </Stack.Navigator>
			<StatusBar style="auto" />
		</NavigationContainer>
  );
}