import * as React from 'react';
import * as RN from 'react-native';

class MyCalendar extends React.Component {
	months = ["January ", "February ", "March ", "April ", "May ",
		"June ", "July ", "August ", "September ", "October ",
		"November ", "December "];

	_onPress = (item) => {
		this.setState(() => {
			if(!item.match && item != -1) {
				this.state.activeDate.setDate(item);
				return this.state;
			}
		});
	};

	changeMonth = (n) => {
		this.setState(() => {
			this.state.activeDate.setMonth(
				this.state.activeDate.getMonth() + n
			)
			return this.state;
		});
	}

	weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	state = {
		activeDate: new Date()
	}

	generateMatrix() {
		var matrix = [];

		//Create header
		matrix[0] = this.weekDays;

		var year = this.state.activeDate.getFullYear();
		var month = this.state.activeDate.getMonth();
		var firstDay = new Date(year, month, 1).getDay();

		var maxDays = this.nDays[month];
		if (month == 1) {
			if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
				maxDays += 1;
			}
		}

		var counter = 1;
		for (var row = 1; row < 7; row++) {
			matrix[row] = [];
			for (var col = 0; col < 7; col++) {
				matrix[row][col] = -1;
				if (row == 1 && col >= firstDay) {
					matrix[row][col] = counter++;
				} else if (row > 1 && counter <= maxDays) {
					matrix[row][col] = counter++;
				}
			}
		}

		return matrix;
	}

	render() {
		var matrix = this.generateMatrix();

		var rows = [];
		rows = matrix.map((row, rowIndex) => {
			var rowItems = row.map((item, colIndex) => {
				return (
					<RN.Text 
						style={{
							flex: 1, 
							height: 18,
							textAlign: 'center',
							backgroundColor: rowIndex == 0 ? '#ddd' : '#fff',
							color: colIndex == 0 ? '#a00' : '#000',
							fontWeight: item == this.state.activeDate.getDate() ? 'bold' : 'normal'
					}}
					onPress={() => this._onPress(item)}>
					{item != -1 ? item : ''}
					</RN.Text>
				);
			});

			return (
				<RN.View
					style={{
						flex: 1,
						flexDirection: 'row',
						padding: 15,
						justifyContent: 'space-around',
						alignItems: 'center',
					}}>
					{rowItems}
				</RN.View>
			);
		});

		return (
			<RN.View>
				<RN.Text style={{
					fontWeight: 'bold',
					fontSize: 18,
					textAlign: 'center'
				}}>
				{this.months[this.state.activeDate.getMonth()]}
				{this.state.activeDate.getFullYear()}
			</RN.Text>
			{ rows }

			<RN.View style={{ 
				marginBottom: 20,
				padding: 30,
				flexDirection: "row",
				justifyContent: 'space-between'
			}}>
				<RN.Button title="Previous"
				onPress={() => this.changeMonth(-1)}/>

				<RN.Button title="Next"
				onPress={() => this.changeMonth(+1)}/>
			</RN.View>

			</RN.View>
		);
	}
}

export default class GregorianCalendar extends React.Component {
	render() {
		return <MyCalendar/>;
	}
}
