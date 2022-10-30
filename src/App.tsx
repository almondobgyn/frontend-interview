import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  theme,
  VStack,
} from "@chakra-ui/react";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Flex minH="100vh" p={3} justifyContent="center" alignItems="center">
          <VStack spacing={8} width="xl" p={8}>
            <Heading>Search health.gov</Heading>

            <InputGroup size="md">
              <Input
                pr="5rem"
                size="md"
                onChange={() => {}}
                placeholder="Search for a topic"
              />
              <InputRightElement width="5.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => {}}
                  isLoading={false}
                  disabled={false}
                >
                  Submit
                </Button>
              </InputRightElement>
            </InputGroup>

            <Box h="lg" overflow="auto" w="100%">
              <VStack spacing={4} align="left">
                {/* results here */}
              </VStack>
            </Box>
          </VStack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};
