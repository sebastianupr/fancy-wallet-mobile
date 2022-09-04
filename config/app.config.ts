import Constants from "expo-constants";
import _get from "lodash/get";

export default function config() {
  const FIREBASE_API_KEY = _get(
    Constants,
    "manifest.extra.FIREBASE_API_KEY",
    ""
  ) as string;
  const FIREBASE_PROJECT_ID = _get(
    Constants,
    "manifest.extra.FIREBASE_PROJECT_ID",
    ""
  ) as string;
  const GOOGLE_IOS_CLIENT_ID = _get(
    Constants,
    "manifest.extra.GOOGLE_IOS_CLIENT_ID",
    ""
  ) as string;
  const GOOGLE_EXPO_CLIENT_ID = _get(
    Constants,
    "manifest.extra.GOOGLE_EXPO_CLIENT_ID",
    ""
  ) as string;

  return {
    FIREBASE_API_KEY,
    FIREBASE_PROJECT_ID,
    GOOGLE_IOS_CLIENT_ID,
    GOOGLE_EXPO_CLIENT_ID,
  };
}
