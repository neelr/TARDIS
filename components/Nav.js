import {
  Box,
  Button,
  IconButton,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box width="100%" my="10px" display="flex">
      <Button ml="auto" mr="10px">
        Sign In
      </Button>
      <Button colorScheme="green" mr="10px">
        Sign Up
      </Button>
      <IconButton
        mx="5px"
        mr="20px"
        onClick={toggleColorMode}
        aria-label="theme-change"
        icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        variant="outline"
      />
    </Box>
  );
}
