import {
  ChakraProvider,
  Box,
  Divider,
  Text,
  Flex,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { FaGithub, FaEnvelope, FaFilePowerpoint } from "react-icons/fa";
import Nav from "../components/Nav";
import { RecoilRoot } from "recoil";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Box display="flex" flexDir="column" width="100%" minH="100vh">
          <Head>
            <title>TARDIS</title>
            <link rel="icon" href="/tardis.png" />
          </Head>
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
                href="/tardis-pitch.pptx"
                aria-label="Pitch Deck"
                icon={<FaFilePowerpoint fontSize="20px" />}
              />
              <IconButton
                as="a"
                href="https://github.com/neelr/tardis"
                aria-label="GitHub"
                icon={<FaGithub fontSize="20px" />}
              />
              <IconButton
                as="a"
                href="mailto:tardis@neelr.dev"
                aria-label="Mail"
                icon={<FaEnvelope fontSize="20px" />}
              />
            </ButtonGroup>
          </Flex>
        </Box>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default App;
