import { StackScreenProps } from "@react-navigation/stack";
import { Text } from "@rneui/themed";
import { View } from "react-native";
import { AuthRoutes, AuthStackParamList } from "../../navigation/routes";

type SignInCallbackProps = StackScreenProps<
  AuthStackParamList,
  AuthRoutes.SignInCallback
>;

export default function SignInCallback({ route }: SignInCallbackProps) {
  console.log("params ==>", route.params);
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
}
