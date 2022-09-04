import { useEffect, useMemo, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebase";

export default function useSession() {
  const [userResponse, setUserResponse] = useState<User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((userResponse) => {
      setUserResponse(userResponse);
    });
  }, []);

  const currentUser = useMemo(() => {
    return userResponse || auth.currentUser;
  }, [userResponse]);

  return {
    currentUser,
  };
}
