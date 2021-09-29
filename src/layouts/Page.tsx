import React from "react";

import { Container, Heading } from "@chakra-ui/layout";
const PageLayout: React.FC<{
  title: string;
}> = ({ title, children }) => {
  return (
    <Container maxW="4xl" py="4">
      <Heading pb={4}>{title}</Heading>
      {children}
    </Container>
  );
};

export default PageLayout;
