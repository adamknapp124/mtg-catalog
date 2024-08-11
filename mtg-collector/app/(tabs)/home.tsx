import { View, Text } from 'react-native';
import React from 'react';

const Home = () => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'black',
			}}>
			<Text
				style={{
					color: 'white',
					textAlign: 'center',
					fontSize: 20,
				}}>
				Welcome to your personal magic card database!
			</Text>
			<Text> </Text>
			<Text
				style={{
					color: 'white',
					textAlign: 'center',
					fontSize: 20,
				}}>
				You can use this app to organize and manage your magic card collection.
			</Text>
			<Text> </Text>

			<Text
				style={{
					color: 'white',
					textAlign: 'center',
					fontSize: 20,
				}}>
				Here, you can save all the cards that you own to your own collection and:
			</Text>
			<Text> </Text>
			<Text
				style={{
					color: 'white',
					textAlign: 'center',
					fontSize: 20,
				}}>
				Check card prices, view your total collection worth, reference the
				collection for deck building, and even build and playtest your own deck!
			</Text>
		</View>
	);
};

export default Home;
