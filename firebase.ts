import { FirebaseOptions, initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import config from "./config/app.config";

const { FIREBASE_API_KEY, FIREBASE_PROJECT_ID } = config();

const firebaseConfig: FirebaseOptions = {
  apiKey: FIREBASE_API_KEY,
  projectId: FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);

// Singleton
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
