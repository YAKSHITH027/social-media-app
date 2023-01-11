import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase";
export const useAuth = () => {
  const [user, loading, error] = useAuthState(auth);
  return { user: false, isLoading: false };
};
