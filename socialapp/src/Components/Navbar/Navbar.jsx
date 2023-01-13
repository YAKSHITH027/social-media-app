import { Button, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useLogout } from "../../CustomHooks/Auth";
import { DASHBOARD } from "../../Routes/AllRoutes";

const Navbar = () => {
  const { logout, isLoading } = useLogout();
  return (
    <Flex
      shadow="sm"
      pos="fixed"
      width="full"
      borderTop="6ps solid"
      borderTopColor="teal.400"
      height="16"
      zIndex="3"
      justify="center"
    >
      <Flex px="4" w="full" align="center" maxW="1200px">
        <Link color="teal" as={RouterLink} to={DASHBOARD}>
          Home
        </Link>
        <Button
          ml="auto"
          colorScheme="teal"
          size="sm"
          onClick={logout}
          isLoading={isLoading}
        >
          Logout
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
