// Homescreen
import React from 'react';
import { View, Text, Button } from 'react-native';
import GregorianCalendar from '../react-native-gregorian-calendar';

export default function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<GregorianCalendar />
		</View>
	);
}
