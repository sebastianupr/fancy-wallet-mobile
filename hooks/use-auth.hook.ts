import { useEffect } from "react";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { useAuthRequest } from "expo-auth-session/providers/google";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../firebase";
import config from "../config/app.config";

const { GOOGLE_IOS_CLIENT_ID, GOOGLE_EXPO_CLIENT_ID } = config();

export default function useAuth() {
  const [_request, response, googlePromptLogin] = useAuthRequest({
    // TODO: Move this to env file
    iosClientId: GOOGLE_IOS_CLIENT_ID,
    expoClientId: GOOGLE_EXPO_CLIENT_ID,
  });

  const navigation = useNavigation();

  const signIn = async () => {
    try {
      await googlePromptLogin();
    } catch (err) {
      // TODO: Handler error
      console.error(err);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (err) {
      // TODO: Handler error
      console.error(err);
    }
  };

  useEffect(() => {
    if (response?.type === "success") {
      const credential = GoogleAuthProvider.credential(
        response.authentication?.idToken as string,
        response.authentication?.accessToken as string
      );

      signInWithCredential(auth, credential).catch((err) => {
        // TODO: Handler error
        console.error(err);
      });
    }
  }, [response]);

  useEffect(() => {
    auth.onAuthStateChanged(() => {
      // navigation.navigate(RootRoutes.Main as never);
    });
  }, []);

  return {
    signIn,
    signOut,
  };
}
