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
} from "@chakra-ui/react";
import { FaExclamationTriangle } from "react-icons/fa";

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
    mr="auto"
    my="10px"
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
        <Flex>
          <Image
            sx={{
              height: "95px",
              ml: "auto",
              my: "auto",
              pr: "20px",
            }}
            src="/tardis.png"
          />
          <Heading
            my="auto"
            mr="auto"
            fontSize={[45, 75, 95]}
            fontWeight="bold"
            color="cyan.500"
          >
            TARDIS
          </Heading>
        </Flex>
        <Text textAlign="center" color="gray.300">
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
        <Text mx="auto" width={["91vw", "62vw", "36vw"]}>
          TARDIS is a response to the{" "}
          <strong>widespread pandemic of demotivation</strong> and disinterest
          of today. By enhancing every different aspect of the day to be
          higher-quality, we can{" "}
          <strong>
            impact the lives of people of all ages and walks of life.
          </strong>
        </Text>
      </Box>
      <Divider my="30px" width="100%" mx="auto" />
      <Box mx={["10px", "30px"]}>
        <Flex
          flexDir={["column", "row", "row"]}
          boxShadow="lg"
          borderRadius="lg"
          p="20px"
          my="10px"
        >
          <Box my="auto">
            <Heading fontSize={[25, 25, 35]}>
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
              We use neurotechnology inside a headset along with AI to identify
              what state of mind you are in. This could be anything from stress
              to anxiety. Then, using a tDCS, we can gently modulate the user’s
              brain waves to be closer to the user’s goal, be it to focus or
              sleep or stay calm. All of this is saved on the cloud for easy
              access and provides statistics to help you throughout the day.
              Having doubts on the science? Check out our{" "}
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
                whitepaper supported with multiple research studies
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
                pt: ["1%", "10%"],
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
              <Heading fontSize={[25, 25, 35]}>
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
                We plan on selling TARDIS at{" "}
                <strong>a low cost subscription</strong>! This way the barrier
                to access is much lower, allowing for more people. We'll be
                selling it through mental health clientelle, Amazon, and this
                website!
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
              <Heading fontSize={[25, 25, 35]}>
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
                We use <strong>100% noninvasive technology</strong> that gives
                only positive long-term effects, and easy to remove. The entire
                thing is a small headset you can remove easily, and just
                attaches to the outside of your head.
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Box boxShadow="lg" borderRadius="lg" p="20px" my="10px">
          <Heading fontSize={[25, 25, 35]}>
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
            All alternatives are a whack-a-mole game of having to choose between
            something <strong>inneffective</strong>, <strong>invasive</strong>,
            and <strong>expensive</strong>
          </Text>
          <Text fontWeight="bold">TARDIS does much better by being</Text>
          <Flex flexDir={["column", "row", "row"]} flexWrap="wrap">
            <Box boxShadow="lg" borderRadius="lg" p="20px" m="10px" width="30%">
              <Heading fontSize={[25, 25, 35]}>🦽 Accessible</Heading>
              <Text>TARDIS is low cost and easy to use and customize.</Text>
            </Box>
            <Box boxShadow="lg" borderRadius="lg" p="10px" m="10px" width="30%">
              <Heading fontSize={[25, 25, 35]}>👆 Interactive</Heading>
              <Text>
                The app allows personalized feedback and training, giving the
                user the choice to choose their goal and stick with it.
              </Text>
            </Box>
            <Box boxShadow="lg" borderRadius="lg" p="20px" m="10px" width="30%">
              <Heading fontSize={[25, 25, 35]}>💥 Effective</Heading>
              <Text>
                We don’t sacrifice quality – our initial prototype tests show it
                is effective and there is much research supporting our findings.
              </Text>
            </Box>
            <Box boxShadow="lg" borderRadius="lg" p="20px" m="10px" width="30%">
              <Heading fontSize={[25, 25, 35]}>😇 Ethical</Heading>
              <Text>
                We use 100% noninvasive technology that gives only positive
                long-term effects, and easy to remove.
              </Text>
            </Box>
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
            We can be trusted to take this to completion with our diverse team
            of programmers and scientists!
          </Text>
        </Flex>
        <Flex flex="1" flexDir="column" mx="auto">
          <TeamMember
            name="Claire Wang"
            title="Neuroscience Researcher at UCLA and Hardware Designer"
            src="/claire.jpeg"
          />
          <TeamMember
            name="Charles Duong"
            title="Backend Programmer and Computer Science Researcher"
            src="/charles.jpg"
          />
          <TeamMember
            name="Andrew Gao"
            title="Computational Neuroscience Researcher and Scientist"
            src="/andrew.png"
          />
          <TeamMember
            name="Neel Redkar"
            title="AI Development/Researcher and Full Stack Developer"
            src="/neel.png"
          />
        </Flex>
      </Flex>
    </Box>
  );
}
