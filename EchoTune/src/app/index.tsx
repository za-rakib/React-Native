import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Index = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.name}>Abdullah </Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f5f5f5', // Light gray background
	},
	name: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#2e86de', // Blue shade
		backgroundColor: '#fff',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 5, // Shadow effect for Android
	},
})

export default Index
