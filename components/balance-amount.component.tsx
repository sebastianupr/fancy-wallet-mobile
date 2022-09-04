import { View } from "react-native";
import { makeStyles, Text } from "@rneui/themed";

type BalanceAmountProps = {
  amount: string;
  size?: "medium" | "big";
};

export default function BalanceAmount({
  amount,
  size = "medium",
}: BalanceAmountProps) {
  const styles = useStyles({ size });

  return (
    <View style={styles.balanceAmountContainer}>
      <Text style={styles.balanceAmountText}>{amount}</Text>
      <Text style={styles.balanceSymbol}>$</Text>
    </View>
  );
}

const useStyles = makeStyles(
  (_theme, { size = "medium" }: { size: BalanceAmountProps["size"] }) => ({
    balanceAmountContainer: {
      position: "relative",
    },
    balanceAmountText: {
      fontWeight: "bold",
      fontSize: size === "big" ? 26 : 22,
      paddingLeft: 12,
    },
    balanceSymbol: {
      fontSize: size === "big" ? 17 : 14,
      position: "absolute",
      top: 2,
      left: 0,
    },
  })
);
