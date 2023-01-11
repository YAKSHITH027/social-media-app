import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { REGISTER } from "../../Routes/AllRoutes";
import { Link as RouterLink } from "react-router-dom";

const Login = () => {
  return (
    <Center h="100vh">
      <Box
        mx="1"
        maxW="md"
        p="9"
        borderWidth="1px"
        borderRadius="lg"
        textAlign="center"
      >
        <Heading mb="4" size="lg">
          Log In
        </Heading>
        <form onSubmit={() => {}}>
          <FormControl isInvalid={true} py="2">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Email" />
            <FormErrorMessage>This is an error message</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={true}>
            <FormLabel>password</FormLabel>
            <Input type="password" placeholder="password" />
            <FormErrorMessage>This is an error message</FormErrorMessage>
          </FormControl>
          <Button
            mt="4"
            type="submit"
            size="md"
            colorScheme="green"
            bg="blue"
            color="white"
            w="full"
          >
            Log In
          </Button>
        </form>
        <Text>
          Don't have an account?{" "}
          <Link
            to={REGISTER}
            as={RouterLink}
            color="teal.800"
            fontWeight="medium"
            _hover={{ background: "green.100" }}
          >
            Register
          </Link>{" "}
          instead
        </Text>
      </Box>
    </Center>
  );
};

export default Login;
