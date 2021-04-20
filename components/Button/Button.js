import React from "react";
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import colors from "/assets/styles/colors.json";

const TextButton = function ({
	title='Click me',
	onPress
}) {
	return(
		<TouchableOpacity onPress={onPress}>
			<View style={styles.button}>
				<Text style={styles.buttonText}>{title}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors['color-primary'],
		height: 50,
		borderRadius: 6
  },
  buttonText: {
    textAlign: 'center',
    padding: 17,
    color: colors['color-font-light']
  }
});

export default TextButton;