import { Icon } from "@chakra-ui/react";
import { Flex, Link } from "@chakra-ui/react";
import { ReactText } from "react";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";
// export type IconType = () => React.ReactElement;

export type NavItemProps = {
  icon: IconType;
  children: ReactText;
  to: string;
};

const NavItem: React.FC<NavItemProps> = ({ icon, children, to }) => {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "blue.400",
          color: "white",
        }}
        fontSize="md"
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="24"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        <span
          style={{
            // textDecoration:""
            textTransform: "uppercase",
            fontWeight: 600,
            letterSpacing: "1px",
            fontSize: "14px",
          }}
        >
          {children}
        </span>
      </Flex>
    </NavLink>
  );
};

export default NavItem;
