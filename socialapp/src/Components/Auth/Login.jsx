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
import { DASHBOARD, REGISTER } from "../../Routes/AllRoutes";
import { Link as RouterLink } from "react-router-dom";
import { useLogin } from "../../CustomHooks/Auth";
import { useForm } from "react-hook-form";
import { emailValidate, passwordValidate } from "../../utils/form-validate";
import { async } from "@firebase/util";

const Login = () => {
  const { login, isLoading } = useLogin();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  console.log(errors);
  async function handleLogin(data) {
    let success = await login({
      email: data.email,
      password: data.password,
      redirectTo: DASHBOARD,
    });
    if (success) reset();
  }

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
        <form onSubmit={handleSubmit(handleLogin)}>
          <FormControl isInvalid={errors.email} py="2">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              {...register("email", emailValidate)}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel>password</FormLabel>
            <Input
              type="password"
              placeholder="password"
              {...register("password", passwordValidate)}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt="4"
            type="submit"
            size="md"
            colorScheme="green"
            bg="blue"
            isLoading={isLoading}
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
