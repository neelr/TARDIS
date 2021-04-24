import {
  Box,
  Divider,
  Heading,
  Text,
  HStack,
  Flex,
  Avatar,
} from "@chakra-ui/react";

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
      <Heading
        mt="30px"
        textAlign="center"
        fontSize={[35, 55, 75]}
        fontWeight="bold"
        color="cyan.500"
      >
        TARDIS
      </Heading>
      <Text textAlign="center">
        Bacon ipsum dolor amet shank pig rump ground round brisket.
      </Text>
      <Box
        boxShadow="lg"
        width="75vw"
        mx="auto"
        display="flex"
        p="20px"
        borderRadius="md"
      >
        <HStack spacing="20px" flexDir={["column", "column", "row"]}>
          <Flex flexDir="column">
            <NumberIcon>1</NumberIcon>
            <Text>
              Bacon ipsum dolor amet shank pig rump ground round brisket. Corned
              beef spare ribs kielbasa filet mignon. Pancetta frankfurter doner,
              rump burgdoggen swine turducken kevin strip steak biltong shoulder
              kielbasa cupim andouille. Shank ham kevin chicken leberkas jerky.
              Pancetta short ribs tri-tip, jowl tenderloin shankle meatball
              chuck fatback. Fatback ribeye pork chop, pork hamburger biltong
              shank beef sausage bacon strip steak jerky. Porchetta filet mignon
              ham hock bresaola, burgdoggen chislic doner strip steak sausage
              kevin salami chicken t-bone.
            </Text>
          </Flex>
          <Flex flexDir="column">
            <NumberIcon>2</NumberIcon>
            <Text>
              Bacon ipsum dolor amet shank pig rump ground round brisket. Corned
              beef spare ribs kielbasa filet mignon. Pancetta frankfurter doner,
              rump burgdoggen swine turducken kevin strip steak biltong shoulder
              kielbasa cupim andouille. Shank ham kevin chicken leberkas jerky.
              Pancetta short ribs tri-tip, jowl tenderloin shankle meatball
              chuck fatback. Fatback ribeye pork chop, pork hamburger biltong
              shank beef sausage bacon strip steak jerky. Porchetta filet mignon
              ham hock bresaola, burgdoggen chislic doner strip steak sausage
              kevin salami chicken t-bone.
            </Text>
          </Flex>
          <Flex flexDir="column">
            <NumberIcon>3</NumberIcon>
            <Text>
              Bacon ipsum dolor amet shank pig rump ground round brisket. Corned
              beef spare ribs kielbasa filet mignon. Pancetta frankfurter doner,
              rump burgdoggen swine turducken kevin strip steak biltong shoulder
              kielbasa cupim andouille. Shank ham kevin chicken leberkas jerky.
              Pancetta short ribs tri-tip, jowl tenderloin shankle meatball
              chuck fatback. Fatback ribeye pork chop, pork hamburger biltong
              shank beef sausage bacon strip steak jerky. Porchetta filet mignon
              ham hock bresaola, burgdoggen chislic doner strip steak sausage
              kevin salami chicken t-bone.
            </Text>
          </Flex>
        </HStack>
      </Box>
      <Divider my="30px" width="25vw" mx="auto" />
      <Flex flexDir={["column", "row", "row"]}>
        <Flex flex="1" my="auto" flexDir="column">
          <Heading mx="auto" fontSize={[30, 40, 50]}>
            The Team
          </Heading>
          <Text mx="auto" width="75%">
            Bacon ipsum dolor amet shank pig rump ground round brisket. Corned
            beef spare ribs kielbasa filet mignon. Pancetta frankfurter doner,
          </Text>
        </Flex>
        <Flex flex="1" flexDir="column" mx="auto">
          <TeamMember
            name="Neel Redkar"
            title="Eater of Memes"
            src="https://timesofindia.indiatimes.com/photo/67586673.cms"
          />
          <TeamMember
            name="Neel Redkar"
            title="Eater of Memes"
            src="https://timesofindia.indiatimes.com/photo/67586673.cms"
          />
          <TeamMember
            name="Neel Redkar"
            title="Eater of Memes"
            src="https://timesofindia.indiatimes.com/photo/67586673.cms"
          />
          <TeamMember
            name="Neel Redkar"
            title="Eater of Memes"
            src="https://timesofindia.indiatimes.com/photo/67586673.cms"
          />
        </Flex>
      </Flex>
    </Box>
  );
}
