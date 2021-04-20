import React from "react";
import { StyleSheet, Text, View, Alert, Image, TextInput, SafeAreaView } from "react-native";
import TextButton from "@/TextButton/TextButton";
import Button from "@/Button/Button";
import colors from "assets/styles/colors.json";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	centered: {
		width: "75%",
		marginTop: 200,
		flex: 1,
		alignItems: 'center'
	},
	card: {
		borderWidth: 1,
		borderColor: colors['color-bg-light-border'],
		width: '100%',
		shadowColor: 'black',
		shadowOffset: {
			width: 0,
			height: 15
		},
		shadowRadius:16,
		shadowOpacity: 0.58,
		elevation: 8,
		borderRadius: 6,
		backgroundColor: colors['color-bg-white'],
		paddingTop: 30,
		paddingBottom: 30
	},
	padded:{
		paddingLeft: 30,
		paddingRight: 30
	},
	logo: {
		width: 177,
		height: 32,
		alignSelf: 'center'
	},
	input: {
		height: 40,
		marginTop: 12,
		marginBottom: 12,
		borderWidth: 1,
		alignSelf: 'stretch',
		borderRadius: 6,
		borderColor: colors['color-bg-verylight-border'],
		paddingLeft: 10,
		paddingRight: 10
	},
	innerNav: {
		borderBottomWidth: 1,
		borderBottomColor: colors['color-bg-verylight-border'],
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 20,
		marginBottom: 30
	}
})

const Login = function () {
	const [phone, onChangePhone] = React.useState("Phone Number");

	const _onPressButton = function() {
    alert('You tapped the button!')
  }

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.centered}>
				<View style={styles.card}>
					<View style={styles.padded}>
						<Image 
							style={styles.logo}
							source={require('/assets/images/logo.png')}
						/>
					</View>
					<View style={styles.innerNav}>
						<TextButton
							text="Login"
							active={true}
							onPress={_onPressButton}
						/>
						<TextButton text="Signup"/>
					</View>
					<View style={styles.padded}>
						<Text>Phone Number</Text>
						<TextInput
							style={styles.input}
							onChangeText={onChangePhone}
							value={phone}
						/>
					</View>
					<View style={styles.padded}>
						<Text>Password</Text>
						<TextInput
							style={styles.input}
							onChangeText={onChangePhone}
							value={phone}
						/>
					</View>
					<View style={styles.padded}>
						<Button style={{marginTop: 12}} title="Log In"/>
						<Text style={{alignSelf: 'center', marginTop: 12, color: colors['color-primary'], textDecorationLine: 'underline'}}>Having trouble loggin in?</Text>
						<Text style={{alignSelf: 'center', marginTop: 10}}>Don't have an account? <Text style={{color: colors['color-primary'], textDecorationLine: 'underline'}}>Sign up</Text></Text>
					</View>
				</View>
				<Text style={{marginTop: 20, color: colors['color-bg-light-border']}}>Copyright © 2020 PTO Genius</Text>
			</View>
		</SafeAreaView>
	)
}

export default Login;