import { View, Text, ActivityIndicator, SafeAreaView } from 'react-native';
import React from 'react';
import useSWR from 'swr';

const fetcher = (arg: any, ...args: any) =>
	fetch(arg, ...args).then((res) => {
		if (!res.ok) {
			throw new Error('Network response was not ok');
		}
		return res.json();
	});

const Add = () => {
	const { data, error, isLoading } = useSWR('https://api.scryfall.com/sets', fetcher);

	if (isLoading) {
		return (
			<SafeAreaView
				style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size='large' color='#ffffff' />
			</SafeAreaView>
		);
	}

	if (error) {
		console.log(error);
		return (
			<SafeAreaView
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
					Failed to fetch data. {error.message}
				</Text>
			</SafeAreaView>
		);
	}

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
				{data ? data.data[0].name : 'Loading...'}
			</Text>
		</View>
	);
};

export default Add;
