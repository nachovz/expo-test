import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from "/assets/styles/colors.json";

const TextButton = function ({
	text='Click me',
	active=false,
	onPress
}) {
	return(
		<TouchableOpacity onPress={onPress}>
			<View style={{...styles.button, ...(active && styles.active)}}>
				<Text style={styles.buttonText}>{text}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
		height: 50
  },
  buttonText: {
    textAlign: 'center',
    padding: 17,
    color: colors['color-font-dark']
  },
	active: {
		borderBottomWidth: 2,
		borderBottomColor: colors['color-secondary-dark'],
	}
});

export default TextButton;