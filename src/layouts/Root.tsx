import { Flex, useMediaQuery } from "@chakra-ui/react";
import {
  Text,
  Box,
  IconButton,
  useBreakpointValue,
  Drawer,
  useBoolean,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { MdClose, MdMenu } from "react-icons/md";
import Sidebar from "../widgets/Sidebar";

const RootLayout: React.FC<{}> = ({ children }) => {
  const [open, setOpen] = useBoolean();
  const isBase = useBreakpointValue({ base: true, md: false }, "xs");
  return (
    <>
      <Flex>
        <Box
          as="aside"
          minWidth="240px"
          width="80vw"
          maxWidth="240px"
          display={{ base: "none", md: "block" }}
          bg="grey"
        >
          <Sidebar></Sidebar>
        </Box>
        <Box w="100%">
          <Box
            as="header"
            px={2}
            py="2"
            bg={"gray.900"}
            color={"gray.200"}
            display={{ base: "block", md: "none" }}
          >
            <Flex maxW="4xl" margin="auto" alignItems="center">
              <IconButton
                aria-label="toggle-sidebar"
                icon={open ? <MdClose /> : <MdMenu />}
                marginRight={4}
                onClick={setOpen.on}
                as="button"
                display="inline-flex"
                bg={"gray.900"}
                color={"gray.200"}
                _hover={{
                  color: "grey.200",
                }}
                fontSize="28"
              ></IconButton>
              <Text fontSize="3xl">LOGO</Text>
            </Flex>
          </Box>
          <Box bg="#eee" as="main" h="100vh" overflowY="scroll">
            {children}
          </Box>
        </Box>
      </Flex>
      <Drawer
        isOpen={isBase ? open : false}
        placement="left"
        onClose={setOpen.off}
      >
        <DrawerOverlay />
        <DrawerContent maxW="240px">
          <DrawerCloseButton bg={"gray.900"} color={"gray.200"} />
          <Sidebar></Sidebar>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default RootLayout;
