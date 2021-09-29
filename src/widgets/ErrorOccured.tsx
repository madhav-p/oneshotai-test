import React from "react";
import { Center, Heading, Text, VStack } from "@chakra-ui/layout";
const ErrorOccured: React.FC<{
  message: string;
}> = ({ message }) => {
  return (
    <Center height="100vh">
      <VStack>
        <Heading mt="6">Error !</Heading>
        <Text>{message} </Text>
      </VStack>
    </Center>
  );
};

export default ErrorOccured;
