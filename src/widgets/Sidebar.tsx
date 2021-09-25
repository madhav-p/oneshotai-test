// import { CloseButton } from '@chakra-ui/close-button';
import { useColorModeValue } from "@chakra-ui/react";
import { Box, Flex, Text } from "@chakra-ui/react";
import NavItem from "./NavItem";
import { IconType } from "react-icons";
import {
  MdDashboard,
  MdSchool,
  MdClass,
  MdPerson,
  MdSettings,
} from "react-icons/md";

type LinkItemProps = {
  name: string;
  icon: IconType;
  to: string;
};
const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: MdDashboard, to: "/" },
  { name: "Colleges", icon: MdSchool, to: "/colleges" },
  { name: "Students", icon: MdPerson, to: "/students" },
  { name: "Courses", icon: MdClass, to: "/courses" },
  { name: "Settings", icon: MdSettings, to: "/settings" },
];

const Sidebar: React.FC<{}> = ({}) => {
  return (
    <Box
      bg={"gray.900"}
      color={"gray.200"}
      borderRight="1px"
      borderRightColor={"gray.700"}
      h="100vh"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="3xl" fontFamily="monospace" fontWeight="bold">
          LOGO
        </Text>
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} to={link.to}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

export default Sidebar;
