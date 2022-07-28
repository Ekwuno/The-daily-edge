import { Box, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import CommentSection from './components/CommentSection';
import Navbar from './components/Navbar';
import qs from 'query-string';
import { useAuth } from './context/AuthContext';

function App() {
	const { login } = useAuth();

	useEffect(() => {
		const parsedQuery = qs.parseUrl(window.location.href);
		const handleLogin = async () => {
			await login();
		};

		if (parsedQuery.query.code) {
			handleLogin();
		}
	}, []);

	return (
		<>
			<Navbar />
			<Box px={8} py={16}>
				<Heading as="h2" size="2xl">
					The Daily Edge
				</Heading>
				<CommentSection />
			</Box>
		</>
	);
}

export default App;
