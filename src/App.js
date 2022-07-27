import { ChakraProvider, Container, Heading } from '@chakra-ui/react';
import CommentSection from './components/CommentSection';
import { AuthProvider } from "react-auth-kit";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { theme } from './theme';

function App() {
	return (
		<GoogleOAuthProvider clientId="667479857185-5e3gtvc9nd9br5htl9qhsf0ub0nape6t.apps.googleusercontent.com">
			<ChakraProvider theme={theme}>
				<Container maxW="container.lg" py={16} px={8} bg="white" minH="100vh">
					<Heading as="h2" size="2xl">
						The Daily Edge
					</Heading>
					<CommentSection />
				</Container>
			</ChakraProvider>
		</GoogleOAuthProvider>
	);
}

export default App;
