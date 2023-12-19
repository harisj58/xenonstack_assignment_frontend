import {
  Button,
  Flex,
  Image,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom.js";
import { Link as RouterLink } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import useLogout from "../hooks/useLogout";
import authScreenAtom from "../atoms/authAtom.js";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const currentUser = useRecoilValue(userAtom);
  const logout = useLogout();
  const setAuthScreen = useRecoilState(authScreenAtom);

  return (
    <Flex justifyContent={"space-between"} mt={6} mb={12}>
      {currentUser && (
        <Text
          ml="8"
          size="md"
          fontWeight="semibold"
          color={colorMode === "dark" ? "white" : "gray.dark"}
        >
          TFP
        </Text>
      )}
      {!currentUser && (
        <Link
          as={RouterLink}
          to={"/auth"}
          onClick={() => setAuthScreen("login")}
        ></Link>
      )}
      <Image
        cursor={"pointer"}
        alt="logo"
        w={6}
        src={colorMode === "dark" ? "./logo192.png" : "./logo192.png"}
        onClick={toggleColorMode}
      />
      {currentUser && (
        <Flex alignItems={"center"} gap={4}>
          <Button size="xs" onClick={logout}>
            <HiOutlineLogout size={20} />
          </Button>
        </Flex>
      )}
      {!currentUser && (
        <Link
          as={RouterLink}
          to={"/auth"}
          onClick={() => setAuthScreen("signup")}
        ></Link>
      )}
    </Flex>
  );
}

export default Header;
