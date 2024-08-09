import { Redirect } from 'expo-router';

const StartPage = () => {
	return <Redirect href={'/home' as any} />;
};

export default StartPage;
