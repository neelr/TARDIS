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
              content="https://tardisapp.us/ogimage.png"
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
              content="https://tardisapp.us/ogimage.png"
            />
          </Head>
          <Nav />
          <Component {...pageProps} />
          <Divider />
          <Flex mx="30px" my="30px">
            <Text ml="30px" my="auto">
              ?? 2021 TARDIS, All rights reserved.
            </Text>
            <ButtonGroup variant="ghost" color="gray.600" ml="auto">
              <IconButton
                as="a"
                href="http://u.filein.io/VLQKvYkqtd.pdf"
                aria-label="Pitch Deck"
                target="_blank"
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
            .buttons {
              margin-left: auto;
              margin-right: auto;
              position: relative;
              justify-content: center;
            }
            .button {
              padding: 25px 30px;
              position: relative;
              font-weight: 900 !important;
              font-size: 1.5rem;
              margin-top: 15px;
              text-align: center;

              color: #ffffff;
              box-shadow: 0px 4px 30px rgba(255, 255, 255, 0.76);
              border-radius: 5px;
              background: linear-gradient(
                90deg,
                #0fe1ff -34.31%,
                #de9aff 103.95%
              );
            }
            .button:hover {
              background: linear-gradient(
                90deg,
                rgba(16, 198, 255, 0.9) 30%,
                rgba(218, 139, 255, 0.8) 94.43%
              );
              box-shadow: 0px 0px 30px 0px #0eb7ff8a;
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
              opacity: 80%;
              box-shadow: 0px 0px 30px 0px #10e2ff54;
            }
          `}</style>
        </Box>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default App;
