import Icon from "@chakra-ui/icon";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/stat";
import React from "react";
import { IconType } from "react-icons";

const TotalStats: React.FC<{
  icon: IconType;
  label: string;
  number: number;
  color?: string;
}> = ({ icon, label, number, color }) => {
  return (
    <Box
      p={{
        base: 2,
        md: 4,
        lg: 6,
      }}
      mb={4}
      borderRadius="lg"
      bg="white"
      // bgGradient="linear(to-tr, blue.300, blue.100)"
      flex="1"
    >
      <Stat>
        <StatLabel fontSize="2xl">
          <Flex alignItems="center" justifyContent="space-between">
            <Text>{label}</Text> <Icon as={icon}></Icon>
          </Flex>
        </StatLabel>
        <StatNumber fontSize="5xl" mt="-2">
          {number}
        </StatNumber>
      </Stat>
    </Box>
  );
};

export default TotalStats;
