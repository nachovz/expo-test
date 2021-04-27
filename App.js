import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import LoginScreen from "./screens/login";
import Storybook from "./screens/storybook";

import colors from "./assets/styles/colors.json";

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

const Stack = createStackNavigator();

export default function App() {
  return (
		<NavigationContainer theme={PtoTheme}>
			<Stack.Navigator initialRouteName="Login">
        		{/*<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Details" component={DetailsScreen} />*/}
				<Stack.Screen 
					name="Login" 
					options={{headerShown:false}} 
					component={LoginScreen}
				/>
				{__DEV__ &&
				<Stack.Screen
					name="Storybook"
					component={Storybook}
				/>}
      		</Stack.Navigator>
			<StatusBar style="dark"/>
			{__DEV__ && <Text>Running Dev</Text>}
		</NavigationContainer>
  );
}