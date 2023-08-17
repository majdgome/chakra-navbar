import React from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import {
  Container,
  Image,
  Flex,
  Button,
  Collapse,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
const Nav = () => {
  return (
    <Flex  bg="green.200" w="100%" h="66px" flexDir="column">
      <Container
        maxW="5xl"
        display="flex"
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        zIndex={10}
      >
        <Box>
          <Image
            src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"
            w={{ base: "12", lg: "15" }}
            borderRadius={25}
            mt={{ base: 2, lg: 2 }}
          />
        </Box>

        <DesktopNav display={{ base: "none", lg: "flex" }} />





        <MobileNav />
      </Container>
    </Flex>
  );
};

export default Nav;
