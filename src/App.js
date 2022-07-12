import { ChakraProvider, Container, Heading } from "@chakra-ui/react";
import { AddComment } from "./components/AddComment";
import { theme } from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Container maxW="container.lg" py={16} px={8} bg="white" minH="100vh">
      <Heading as="h2" size="2xl">
       The Daily Edge
      </Heading>
<AddComment/>
    </Container>
  </ChakraProvider>
  );
}

export default App;
