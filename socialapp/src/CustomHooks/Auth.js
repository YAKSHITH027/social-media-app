import { useToast } from "@chakra-ui/react";
import { async } from "@firebase/util";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { DASHBOARD, LOGIN } from "../Routes/AllRoutes";
export const useAuth = () => {
  const [user, isLoading, isError] = useAuthState(auth);
  return { user, isLoading, isError };
};

export function useLogin() {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  async function login({ email, password, redirectTo = DASHBOARD }) {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "You are logged in.",
        status: "success",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
      navigate(redirectTo);
    } catch (error) {
      console.log(error);
      toast({
        title: "Logging in failed",
        description: error.message,
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
      return false;
    }
    setLoading(false);
    return true;
  }

  return { login, isLoading };
}
export function useLogout() {
  const [signOut, isLoading, error] = useSignOut(auth);
  const toast = useToast();
  const navigate = useNavigate();
  async function logout() {
    if (await signOut()) {
      toast({
        title: "Successfully logged out",
        status: "success",
        isClosable: true,
        position: "top",
        duration: 5000,
      });

      navigate(LOGIN);
    } else {
      console.log("error", error);
    }
  }
  return { logout, isLoading };
}
