import { Tabs } from 'expo-router';

export default () => {
	return (
		<Tabs>
			<Tabs.Screen name='home' />
			<Tabs.Screen name='add' />
			<Tabs.Screen name='collection' />
		</Tabs>
	);
};
