import {
  Box,
  Divider,
  Heading,
  Text,
  HStack,
  Flex,
  Avatar,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FaExclamationTriangle } from "react-icons/fa";

let Highlight = (props) => (
  <Text
    as="span"
    px="5px"
    py="0"
    bg="yellow.200"
    borderRadius="md"
    {...props}
  />
);

const NumberIcon = (props) => (
  <Box
    width="40px"
    borderRadius="100px"
    height="40px"
    bg="blue.400"
    fontWeight="bold"
    textAlign="center"
    display="flex"
    mx="auto"
    color="white"
    my="10px"
  >
    <Text m="auto" {...props} />
  </Box>
);

const TeamMember = ({ name, title, src, ...props }) => (
  <Flex
    boxShadow="md"
    p="15px"
    borderRadius="lg"
    mx={["auto", 0, 0]}
    mr="auto"
    my="10px"
    width="75%"
    {...props}
  >
    <Avatar src={src} />
    <Box ml="3">
      <Text fontWeight="bold">{name}</Text>
      <Text fontSize="sm">{title}</Text>
    </Box>
  </Flex>
);

export default function Main() {
  return (
    <Box display="flex" flexDir="column">
      <Box mx="10px" mt="30px">
        <Image
          sx={{
            height: "95px",
            mx: "auto",
          }}
          src="/tardis.png"
        />
        <Flex>
          <Heading
            my="auto"
            mx="auto"
            fontSize={[45, 75, 95]}
            fontWeight="900"
            color="#201DCF"
            className="main-title"
          >
            TARDIS
          </Heading>
        </Flex>
        <Text
          className="long-title"
          sx={{
            fontSize: ["lg", "2xl", "3xl"],
            py: "10px",
            fontWeight: "bold",
          }}
          textAlign="center"
          color="gray.300"
        >
          {"Transcranial Applicable Repeating Deep Interchanging Stimulation"
            .split(" ")
            .map((v) => {
              return (
                <Text as="span">
                  <Text as="span" fontWeight="medium" color="gray.500">
                    {v[0]}
                  </Text>
                  {v.slice(1)}{" "}
                </Text>
              );
            })}
        </Text>
        <Text fontSize={[25, 25, 45]} textAlign="center" fontWeight="bold">
          Take back{" "}
          <Text px="10px" py="0" bg="yellow.200" borderRadius="md" as="span">
            control
          </Text>{" "}
          of your life.
        </Text>
        <Text
          mx="auto"
          fontSize={[16, 16, 24]}
          width={["95vw", "65vw", "40vw"]}
        >
          TARDIS is our response to the{" "}
          <strong>widespread pandemic of mental health </strong>
          of today. By enhancing every aspect of your day to be higher-quality,
          we can{" "}
          <strong>impact the lives of people from all walks of life.</strong>
        </Text>
        <Flex>
          <Button
            href="#"
            as="a"
            target="_blank"
            fontWeight="800"
            className="button"
          >
            Our Pitch Deck
          </Button>
        </Flex>
      </Box>
      <Divider my="30px" width="100%" mx="auto" />
      <Box mx={["10px", "10vw", "20vw"]}>
        <Flex
          flexDir={["column", "row", "row"]}
          boxShadow="lg"
          borderRadius="lg"
          p="20px"
          my="10px"
        >
          <Box my="auto">
            <Heading mb="10px" fontSize={[25, 25, 35]}>
              How does this{" "}
              <Text
                sx={{
                  textDecor: "underline",
                  textDecorationStyle: "wavy",
                  textDecorationColor: "#63B3ED",
                }}
                as="span"
              >
                work
              </Text>
              ? 👷
            </Heading>
            <Text>
              We use state-of-the-art <Highlight>neurotechnology</Highlight>{" "}
              inside a headset along with <Highlight>AI</Highlight> to identify
              your state of mind. This could be anything from stress to anxiety.
              Using a tDCS, TARDIS will <Highlight>gently modulate</Highlight>{" "}
              your brain waves , be it to focus, sleep, or stay calm. All of the
              data is saved in the cloud for easy access and provides statistics
              to help you throughout your day. Having doubts on the science?
              Check out our{" "}
              <Text
                sx={{
                  color: "blue.400",
                  textDecor: "underline",
                  textDecorationStyle: "wavy",
                  ":hover": {
                    color: "blue.300",
                  },
                }}
                href="https://docs.google.com/document/d/e/2PACX-1vQ9Hf1-UrvaBr8aTfuq72pqFgz-dLeZ3KDqXyv8NUVz3rQ13aCFMXnxMDVQXFoXyj_rMS547IxzBc7w/pub"
                target="_blank"
                as="a"
              >
                whitepaper supported by multiple research studies
              </Text>
              .
            </Text>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1)",
              position: "relative",
            }}
          >
            <Image
              src="/cad.png"
              sx={{
                gridColumn: 1,
                gridRow: 1,
                zIndex: 1,
                pr: "13%",
              }}
            />
            <Image
              height="200px"
              src="/dots.svg"
              sx={{
                gridColumn: 1,
                pt: ["1%", "1%"],
                pl: "20%",
                gridRow: 1,
              }}
            />
          </Box>
        </Flex>
        <Flex flexDir={["column", "row", "row"]}>
          <Flex
            flexDir={["column", "row", "row"]}
            boxShadow="lg"
            borderRadius="lg"
            p="20px"
            m="10px"
          >
            <Box my="auto">
              <Heading fontSize={[25, 25, 35]} mb="10px">
                Great. How much does this{" "}
                <Text
                  sx={{
                    textDecor: "underline",
                    textDecorationStyle: "wavy",
                    textDecorationColor: "#68D391",
                  }}
                  as="span"
                >
                  cost
                </Text>
                ? 💰
              </Heading>
              <Text>
                We plan on providing TARDIS with{" "}
                <strong>a low cost subscription option</strong>! This way, the
                barrier to access is much lower, allowing for more people to
                benefit. We'll sell TARDIS through businesses with
                mental-health-focused clientele, Amazon, and this website!
              </Text>
            </Box>
          </Flex>
          <Flex
            flexDir={["column", "row", "row"]}
            boxShadow="lg"
            borderRadius="lg"
            p="20px"
            m="10px"
          >
            <Box my="auto">
              <Heading fontSize={[25, 25, 35]} mb="10px">
                Hmm. Is this brain stuff{" "}
                <Text
                  sx={{
                    textDecor: "underline",
                    textDecorationStyle: "wavy",
                    textDecorationColor: "#F6E05E",
                  }}
                  as="span"
                >
                  safe
                </Text>
                ? 🦺
              </Heading>
              <Text>
                We use <strong>100% noninvasive technology</strong> that leaves
                only positive long-term effects. The entire device is a portable
                headset you can remove easily. TARDIS just attaches to the
                outside of your head, like a hat. That's right, no wires in your
                brain like in the movies!
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Box p="20px" my="10px">
          <Heading
            fontSize={[25, 25, 35]}
            fontWeight="800"
            padding="10px"
            className="section-title"
          >
            How are we better than the{" "}
            <Text
              sx={{
                textDecor: "underline",
                textDecorationStyle: "wavy",
                textDecorationColor: "#FC8181",
              }}
              as="span"
            >
              alternatives
            </Text>
            ?
          </Heading>
          <Text>
            Our competitors are a whack-a-mole game of having to choose between
            something <strong>inneffective</strong>, <strong>invasive</strong>,
            and <strong>expensive</strong>
          </Text>
          <Text fontWeight="bold">TARDIS does much better by being</Text>
          <Flex flexDir="column">
            <Flex flexDir={["column", "row", "row"]} mx="auto">
              <Box
                boxShadow="lg"
                borderRadius="lg"
                p="20px"
                m="10px"
                flex="1"
                className="card-glow"
              >
                <Heading fontSize={[25, 25, 35]} fontWeight="800">
                  🦽 Accessible
                </Heading>
                <Text>TARDIS is low cost, easy to use, and customizable.</Text>
              </Box>
              <Box
                boxShadow="lg"
                borderRadius="lg"
                p="10px"
                m="10px"
                flex="1"
                className="card-glow"
              >
                <Heading fontSize={[25, 25, 35]} fontWeight="800">
                  👆 Interactive
                </Heading>
                <Text>
                  The app allows personalized feedback and training, giving the
                  user the choice to choose their goal and stick with it.
                </Text>
              </Box>
            </Flex>
            <Flex flexDir={["column", "row", "row"]} mx="auto">
              <Box
                boxShadow="lg"
                borderRadius="lg"
                p="20px"
                m="10px"
                flex="1"
                className="card-glow"
              >
                <Heading fontSize={[25, 25, 35]} fontWeight="800">
                  💥 Effective
                </Heading>
                <Text>
                  We don’t sacrifice quality – our initial prototype tests show
                  TARDIS is effective and there is abundant research supporting
                  our findings.
                </Text>
              </Box>
              <Box
                boxShadow="lg"
                borderRadius="lg"
                p="20px"
                m="10px"
                flex="1"
                className="card-glow"
              >
                <Heading fontSize={[25, 25, 35]} fontWeight="800">
                  😇 Ethical
                </Heading>
                <Text>
                  We use noninvasive, easy-to-use technology. No wires, no
                  needles jabbing into your head.Say goodbye to "No pain, no
                  gain" because TARDIS is completely painless!
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Divider my="30px" width="100%" mx="auto" />
      <Flex flexDir={["column", "row", "row"]}>
        <Flex flex="1" my="auto" flexDir="column">
          <Heading mx="auto" fontSize={[30, 40, 50]}>
            The Team
          </Heading>
          <Text mx="auto" width="75%">
            Meet the team behind TARDIS! Our expertise in hardware, software,
            and neuroscience converge perfectly.
          </Text>
        </Flex>
        <Flex flex="1" flexDir="column" mx="auto">
          <TeamMember
            name="Claire Wang"
            title="Neuroscience Researcher at UCLA and Hardware Designer"
            src="/claire.jpeg"
            as="a"
            href="https://bookworm.design"
            className="card-glow"
            className="team"
          />
          <TeamMember
            name="Charles Duong"
            title="Backend Programmer and Computer Science Researcher"
            src="/charles.jpg"
            as="a"
            href="https://linkedin.com/in/charlie-duong"
            className="card-glow"
            className="team"
          />
          <TeamMember
            name="Andrew Gao"
            title="Published Computational Neuroscience Researcher and UCSD Intern"
            src="/andrew.png"
            as="a"
            href="https://andrewgao.dev"
            className="card-glow"
            className="team"
          />
          <TeamMember
            name="Neel Redkar"
            title="AI Development/Researcher and Full Stack Developer"
            src="/neel.png"
            as="a"
            href="https://neelr.dev"
            className="card-glow"
            className="team"
          />
        </Flex>
      </Flex>
    </Box>
  );
}
