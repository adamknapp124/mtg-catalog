import { Stack } from 'expo-router';

const StackLayout = () => {
	return (
		<Stack
			screenOptions={{
				headerStyle: {
					backgroundColor: '#f4511e',
				},
				headerTintColor: 'black',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}>
			<Stack.Screen name='(tabs)' />
		</Stack>
	);
};
