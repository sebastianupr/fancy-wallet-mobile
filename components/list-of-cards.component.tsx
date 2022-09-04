import { View, TouchableOpacity } from "react-native";
import { makeStyles, Text, Icon } from "@rneui/themed";
import _last from "lodash/last";

import AnimatedCreditCard from "./credit-card/animated-credit-card.component";

import { getListOfCards } from "../utils/cards.utils";

export default function ListOfCards() {
  const listOfCards = getListOfCards();

  const styles = useStyles();
  return (
    <View style={[styles.container]}>
      {listOfCards.map(({ id, name, amount, gradientColors }, index) => (
        <AnimatedCreditCard
          key={id}
          title={name}
          amount={amount}
          gradientColors={gradientColors}
          isFirst={index === 0}
          isLast={id === _last(listOfCards)?.id}
        />
      ))}

      <TouchableOpacity style={styles.addCardContainer}>
        <Text>Add card</Text>
        <Icon name="add" type="ionicon" color="white" />
      </TouchableOpacity>
    </View>
  );
}
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    width: "100%",
  },

  addCardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingVertical: 20,
    paddingHorizontal: 15,
    marginTop: 20,
    borderRadius: 10,

    height: 60,

    backgroundColor: theme.colors.primaryLight,
  },
}));
