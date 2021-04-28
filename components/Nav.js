import {
  Box,
  Button,
  IconButton,
  Heading,
  Text,
  useColorMode,
  Avatar,
} from "@chakra-ui/react";
import firebase from "../utils/firebase";
import { userState } from "../utils/atoms";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Nav() {
  const router = useRouter();
  const [user, setUser] = useRecoilState(userState);
  firebase.auth().onAuthStateChanged((userN) => {
    if (userN && !user.name) {
      setUser({
        email: userN.email,
        name: userN.displayName,
        id: userN.uid,
        photo: userN.photoURL,
      });
      firebase
        .database()
        .ref(userN.uid)
        .update({
          "/": {
            email: userN.email,
            name: userN.displayName,
            id: userN.uid,
            photo: userN.photoURL,
            sessions: [],
          },
        });
    }
  });
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/userinfo.profile");

  return (
    <Box width="100%" my="10px" display="flex">
      <Link href="/">
        <Button ml="10px">Home</Button>
      </Link>
      <Link href="https://talk.tardisapp.us/">
        <Button mx="10px">Forums</Button>
      </Link>
      {user.name == null ? null : (
        <>
          <Link href="/dashboard">
            <Button>Dash</Button>
          </Link>
        </>
      )}
      <Box ml="auto" />
      {user.name == null ? null : (
        <>
          <Avatar w="40px" h="40px" src={user.photo} />
          <Text mr="20px" fontWeight="bold" my="auto" ml="10px">
            {user.name}
          </Text>
        </>
      )}
      <Button
        colorScheme={user.name == null ? "green" : "red"}
        mr="10px"
        onClick={() => {
          if (user.name) {
            setUser({
              email: null,
              name: null,
              id: null,
              photo: null,
            });
            firebase
              .auth()
              .signOut()
              .then(() => router.push("/"));
          } else
            firebase
              .auth()
              .signInWithPopup(provider)
              .then(() => router.push("/dashboard"));
        }}
      >
        {user.name == null ? "Sign In" : "Sign Out"}
      </Button>
    </Box>
  );
}
