import { Center, Heading, VStack } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

const Loading = () => {
  return (
    <Center height="100vh">
      <VStack>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Heading mt="6">Loading</Heading>
      </VStack>
    </Center>
  );
};

export default Loading;
