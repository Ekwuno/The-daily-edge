import { ChakraProvider, Container, Heading } from '@chakra-ui/react';
import CommentSection from './components/CommentSection';
import { theme } from './theme';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Container maxW="container.lg" py={16} px={8} bg="white" minH="100vh">
				<Heading as="h2" size="2xl">
					The Daily Edge
				</Heading>
				<CommentSection />
			</Container>
		</ChakraProvider>
	);
}

export default App;
