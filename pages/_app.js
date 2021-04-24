import {
  ChakraProvider,
  Box,
  Divider,
  Text,
  Flex,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Nav from "../components/Nav";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Box
        display="flex"
        flexDir="column"
        width="100vw"
        minH="100vh"
        overflow="hidden"
      >
        <Nav />
        <Component {...pageProps} />
        <Divider />
        <Flex mx="30px" my="30px">
          <Text ml="30px" my="auto">
            © 2021 TARDIS, All rights reserved.
          </Text>
          <ButtonGroup variant="ghost" color="gray.600" ml="auto">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="20px" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="20px" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="20px" />}
            />
          </ButtonGroup>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
