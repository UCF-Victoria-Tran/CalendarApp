import * as React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./react-native-gregorian-calendar";
import LunarScreen from "./react-native-lunar-calendar";
import EventScreen from "./react-native-events";

const Tab = createBottomTabNavigator();

export default function Calendars() {
	return (
		<NavigationContainer>
		<Tab.Navigator initialRouteName="Gregorian">
			<Tab.Screen 
				name="Gregorian" 
				component={HomeScreen}
				options={{
					tabBarIconStyle: { display: "none" }
				}}
			/>
			<Tab.Screen 
				name="Lunar" 
				component={LunarScreen} 
				options={{
					tabBarIconStyle: { display: "none" }
				}}
			/>
			<Tab.Screen
				name="Add Event"
				component={EventScreen}
				options={{
					tabBarIconStyle: { display: "none" }
				}}
			/>
		</Tab.Navigator>
		</NavigationContainer>
	);
}
