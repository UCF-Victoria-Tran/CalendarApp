// Lunarscreen
import React from 'react';
import { View, Text, Button} from 'react-native';
import LunarCalendar from '../react-native-lunar-calendar';

export default function LunarScreen() {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<LunarCalendar
				headerStyle={{backgroundColor: '#fff'}}
				weekHeadStyle={{backgroundColor: '#ddd'}}
				onDateSelect={(date) => console.log(date)}
				onMonthSelect={(mon) => console.log(mon)}
				dateStyle={{backgroundColor: '#fff'}}
				selectDateStyle={{backgroundColor: '#fff'}}
				weekendStyle={{backgroundColor: '#a00'}}
				style={{backgroundColor: '#0f0'}}
			/>
		</View>
	);
}
