import { useEffect } from "react";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { auth } from "../firebase";
import config from "../config/app.config";

import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

const { GOOGLE_IOS_CLIENT_ID, GOOGLE_EXPO_CLIENT_ID } = config();

export default function useAuth() {
  const [_request, response, googlePromptLogin] = Google.useAuthRequest({
    iosClientId: GOOGLE_IOS_CLIENT_ID,
    expoClientId: GOOGLE_EXPO_CLIENT_ID,
  });

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
      await AsyncStorage.clear();
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

  return {
    signIn,
    signOut,
  };
}
