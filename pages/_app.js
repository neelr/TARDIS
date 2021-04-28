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
            <meta name="title" content="TARDIS" />
            <meta
              name="description"
              content="Take back control of your life with TARDIS, a headset that uses neurotechnology and AI to keep you focused."
            />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://tardisapp.us" />
            <meta property="og:title" content="TARDIS" />
            <meta
              property="og:description"
              content="Take back control of your life with TARDIS, a headset that uses neurotechnology and AI to keep you focused."
            />
            <meta
              property="og:image"
              content="https://tardisapp.usassets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
            />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://tardisapp.us" />
            <meta property="twitter:title" content="TARDIS" />
            <meta
              property="twitter:description"
              content="Take back control of your life with TARDIS, a headset that uses neurotechnology and AI to keep you focused."
            />
            <meta
              property="twitter:image"
              content="https://tardisapp.usassets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
            />
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
          <style jsx global>{`
            @import url("https://fonts.googleapis.com/css2?family=Mulish&display=swap");
            @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
            body {
              font-family: "Mulish", "Avenir", -system-ui;
            }
            .main-title {
              font-family: "Bebas Neue", "Mulish", "Avenir", -system-ui;
            }
            .button {
              padding: 10px 15px;
              position: relative;
              font-weight: 800;
              font-size: 2rem;
              margin-top: 15px;
              margin-left: auto;
              margin-right: auto;
              text-align: center;

              color: #ffffff;
              box-shadow: 0px 4px 30px rgba(255, 255, 255, 0.76);
              border-radius: 5px;
              background: linear-gradient(
                90deg,
                rgba(16, 226, 255, 0.8) -34.31%,
                rgba(223, 154, 255, 0.8) 103.95%
              );
            }
            .button:hover {
              background: linear-gradient(
                90deg,
                rgba(16, 198, 255, 0.9) 50%,
                rgba(218, 139, 255, 0.8) 94.43%
              );
              box-shadow: 0px 0px 30px 0px #0eb7ff8a;

              border-radius: 10px;
            }
            .section-title {
              font-family: "Bolden", "Mulish", "Avenir", -system-ui;
              font-weight: 900;
            }

            .card-glow > h1 {
              margin-top: 10px;
            }
            .card-glow {
              box-shadow: 0px 0px 20px 0px #10e2ff33;
            }
            .team:hover {
              box-shadow: 0px 0px 30px 0px #10e2ff54;
            }
          `}</style>
        </Box>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default App;
