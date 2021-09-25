import {
  Container,
  Heading,
  Flex,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { MdSchool } from "react-icons/md";

const Dashboard: React.FC = () => {
  return (
    <Container maxW="4xl">
      <Heading py={{ base: 2, md: 4, xl: 6 }}> Dashboard </Heading>
      <Flex className="flex-flow" flexDir="row" flexWrap="wrap">
        <Box
          p="6"
          borderRadius="lg"
          bgGradient="linear(to-tr, blue.300, blue.100)"
          flex="1"
        >
          <Stat>
            <StatLabel fontSize="2xl">
              <Flex alignItems="center" justifyContent="space-between">
                <span>Colleges</span> <Icon as={MdSchool}></Icon>
              </Flex>
            </StatLabel>
            <StatNumber fontSize="5xl">10000</StatNumber>
          </Stat>
        </Box>
        <Box
          flex="1"
          p="6"
          borderRadius="lg"
          bgGradient="linear(to-tr, blue.300, blue.100)"
        ></Box>
        <Box
          flex="1"
          p="6"
          borderRadius="lg"
          bgGradient="linear(to-tr, blue.300, blue.100)"
        ></Box>
      </Flex>
    </Container>
  );
};

export default Dashboard;
