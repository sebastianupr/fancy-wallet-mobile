import { useState } from "react";
import { Pressable } from "react-native";
import { makeStyles } from "@rneui/themed";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import _get from "lodash/get";

import CreditCard, { CreditCardProps } from "./credit-card.component";

const ANIMATION_DURATION = 300;

type AnimatedCreditCardProps = CreditCardProps & {
  isFirst: boolean;
  isLast: boolean;
};

export default function AnimatedCreditCard({
  title,
  amount,
  gradientColors,
  isFirst,
  isLast,
}: AnimatedCreditCardProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const animation = useSharedValue({
    marginBottom: 0,
  });

  const creditCardAnimation = useSharedValue({
    height: 200,
    paddingBottom: 16,
  });

  const cardContainerAnimation = useAnimatedStyle(() => ({
    marginBottom: withTiming(animation.value.marginBottom, {
      duration: ANIMATION_DURATION,
    }),
  }));

  const creditCardStyleAnimation = useAnimatedStyle(() => ({
    height: withTiming(creditCardAnimation.value.height, {
      duration: ANIMATION_DURATION,
    }),
    paddingBottom: withTiming(creditCardAnimation.value.paddingBottom, {
      duration: ANIMATION_DURATION,
    }),
  }));

  const handlePressCard = () => {
    animation.value = {
      marginBottom: !isExpanded && !isLast ? 80 : 0,
    };

    creditCardAnimation.value = {
      height: !isExpanded && !isLast ? 240 : 200,
      paddingBottom: !isExpanded && !isLast ? 60 : 16,
    };

    setIsExpanded(!isExpanded);
  };

  const styles = useStyles();

  return (
    <Animated.View
      style={[cardContainerAnimation, !isFirst ? styles.cardContainer : {}]}
    >
      <Pressable onPress={() => handlePressCard()}>
        <CreditCard
          title={title}
          amount={amount}
          gradientColors={gradientColors}
          style={creditCardStyleAnimation}
          animated
        />
      </Pressable>
    </Animated.View>
  );
}

const useStyles = makeStyles(() => ({
  cardContainer: {
    marginTop: -150,
  },
}));
