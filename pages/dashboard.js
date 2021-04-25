import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../utils/atoms";
import {
  Box,
  Heading,
  HStack,
  Text,
  Skeleton,
  Button,
  Flex,
} from "@chakra-ui/react";
import { XYPlot, LineSeries } from "react-vis";
import "../node_modules/react-vis/dist/style.css";
import firebase from "../utils/firebase";

export default function Dashboard() {
  const [user, setUser] = useRecoilState(userState);

  let userRef = firebase.database().ref(user.id == null ? "/hole" : user.id);

  const [sessions, setSessions] = useState([
    <Box
      pb="20px"
      width="300px"
      boxShadow="md"
      borderRadius="md"
      overflow="hidden"
      my="15px"
    >
      <Skeleton h="150px" />
      <Box mx="20px">
        <Skeleton my="5px" h="30px" />
        <Skeleton h="20px" />
      </Box>
    </Box>,
  ]);
  useEffect(() => {
    userRef.on("value", (snapshot) => {
      const data = snapshot.val();
      if (data.sessions) {
        console.log(data.sessions);
        setSessions(
          Object.values(data.sessions).map((session, i) => {
            let line1 = [];
            let line2 = [];
            let line3 = [];
            let line4 = [];
            session.eegData.map((v, i) => {
              line1.push({ x: i, y: v[0] });
              line2.push({ x: i, y: v[1] });
              line3.push({ x: i, y: v[2] });
              line4.push({ x: i, y: v[3] });
            });
            return (
              <Box
                as="a"
                href={`/sessions/${Object.keys(data.sessions)[i]}`}
                pb="20px"
                width="300px"
                boxShadow="md"
                borderRadius="md"
                overflow="hidden"
                my="15px"
              >
                <XYPlot height={300} width={300}>
                  <LineSeries data={line1} />
                  <LineSeries data={line2} />
                  <LineSeries data={line3} />
                  <LineSeries data={line4} />
                </XYPlot>
                <Box mx="20px">
                  <Heading>{session.title}</Heading>
                  <Text fontWeight="bold">
                    Classification:{" "}
                    <Text color="blue.700" as="span">
                      {session.classification}
                    </Text>
                  </Text>
                </Box>
              </Box>
            );
          })
        );
      } else {
        console.log(data);
        setSessions([<Text>No Sessions... Create one!</Text>]);
      }
    });
  }, [user]);
  return (
    <Box mb="auto">
      <Flex w="100vw" mt="50px">
        <Button
          ml="auto"
          colorScheme="green"
          mr="70px"
          onClick={() => {
            let data = {};
            data[`sessions/${new Date().getTime().toString()}`] = {
              title: "Untitled",
              classification: "None",
              eegData: [
                [0, 1, 2, 3],
                [0, 1, 2, 3],
              ],
            };
            userRef.update(data);
          }}
        >
          Add +
        </Button>
      </Flex>
      <Heading ml="50px" fontSize={[40, 40, 50]}>
        Dashboard
      </Heading>
      <HStack
        spacing="15px"
        sx={{
          flexWrap: "wrap",
          mx: "50px",
          my: "15px",
        }}
      >
        {sessions}
      </HStack>
    </Box>
  );
}
