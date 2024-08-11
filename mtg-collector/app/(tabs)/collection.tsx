import { View, Text } from 'react-native';
import React, { useState } from 'react';

const collection = () => {
	const [cards, setCards] = useState([]);
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'black',
			}}>
			{cards.length > 0 ? (
				<Text
					style={{
						color: 'white',
						textAlign: 'center',
						fontSize: 20,
					}}>
					Here is your collection
				</Text>
			) : (
				<Text
					style={{
						color: 'white',
						textAlign: 'center',
						fontSize: 20,
					}}>
					Add cards to your collection under the add tab below to view them here
				</Text>
			)}
		</View>
	);
};

export default collection;
