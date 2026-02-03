import { useState, useEffect } from "react";
import { Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavBarCartCount from "../src/components/NavBarCartCount";

const NavBar = () => {
  const [onSwitch, setOnSwitch] = useState(false);

  const switchSelection = () => {
    setOnSwitch(!onSwitch);
  };

  const handleResize = () => {
    if (window.innerWidth < 720) {
    } else {
      setOnSwitch(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Flex flexDir="column" id="mainNavBar" w="100%" position={"sticky"} top={0} zIndex={1000} bg="white" boxShadow="sm">
      <Flex fontFamily="Rubik" justify={"center"}>
        <Flex
          id="desktopDisplay"
          display={["none", "none", "flex", "flex"]}
        >
          <Button
            cursor={"pointer"}
            p="2"
            as="a"
            color="black"
            fontSize={17}
            variant="ghost"
            aria-label="home"
            my={5}
            mx={2}
          >
            <Image src="./img/logo.png" alt="" />
            <Text alignSelf="center" p={1} color="#393C44">
              KeySpace
            </Text>
          </Button>
          <Link to="/" relative="path">
          <Button
            cursor={"pointer"}
            p="2"
            as="a"
            color="#5A5A5A"
            variant="ghost"
            aria-label="home"
            fontSize={17}
            my={5}
            mx={2}
          >Home
          </Button></Link>
          <Link to="/products" relative="path">
          <Button
            cursor={"pointer"}
            as="a"
            color="#5A5A5A"
            variant="ghost"
            aria-label="about"
            fontSize={17}
            my={5}
            mx={2}
          >Products
          </Button></Link>
          <Button
            cursor={"pointer"}
            as="a"
            color="#5A5A5A"
            variant="ghost"
            aria-label="contact"
            fontSize={17}
            my={5}
            mx={2}
          >
            Contact
          </Button>
          <Link to="/registration" relative="path">
          <Button
            id="createAccount"
            cursor={"pointer"}
            as="a"
            color="white"
            aria-label="contact"
            fontSize={16}
            bg="#7BE0AD"
            my={5}
            pr={9}
            pl={9}
          >
            Create Account
          </Button></Link>
          <Flex alignSelf="center" p={1}>
            <NavBarCartCount />
          </Flex>
        </Flex>

        {
          // Mobile Navbar----------------------------------
        }

        <Flex display={["flex", "flex", "none", "none"]} w="100%">
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={1}
            onClick={() => switchSelection()}
            alignSelf="center"
            m={2}
            position="absolute"
          >
            ☰
          </IconButton>
          <Flex
            alignSelf="center"
            fontFamily="Rubik"
            fontWeight="bold"
            justifyContent={"center"}
            w="100%"
          >
            <Text alignSelf="center" p={2} color="#393C44" mr={14}>
              KeySpace
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        id="mobileMenu"
        flexDir="column"
        align="center"
        m="auto"
        w="100%"
        fontFamily="Rubik"
        display={onSwitch ? "flex" : "none"}
      >
        <Button
          p="2"
          as="a"
          color="#5A5A5A"
          variant="ghost"
          aria-label="home"
          my={1}
          mx={2}
          w="100%"
        >
          <Link to="/" relative="path">Home</Link>
          
        </Button>
        <Button
          as="a"
          color="#5A5A5A"
          variant="ghost"
          aria-label="about"
          my={1}
          mx={2}
          w="100%"
        >
          <Link to="/products" relative="path">Products</Link>
        </Button>
        <Button
          as="a"
          color="#5A5A5A"
          variant="ghost"
          aria-label="contact"
          my={1}
          mx={2}
          w="100%"
        >
          <Link to="" relative="path">Contact</Link>
        </Button>
        <Button
          as="a"
          color="white"
          variant="ghost"
          aria-label="contact"
          bg="#7BE0AD"
          my={1}
          pr={9}
          pl={9}
          w="100%"
        >
          <Link to="/registration" relative="path">Create Account</Link>
        </Button>
        <Flex alignSelf="center" p={1}>
            <NavBarCartCount />
          </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;