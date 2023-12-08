import { Button, ButtonText, HStack, VStack } from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import { useLife } from "~/entities/new-game-steps/store/use-life";

type ContainerProps = React.ComponentProps<typeof VStack>;
type LifeProps = {
  orientation?: "horizontal" | "vertical";
  goTo?: "left" | "right" | "top" | "bottom";
};

export function Life({ orientation, ...props }: LifeProps & ContainerProps) {
  const { life } = useLife();
  const [currentLife, setCurrentLife] = useState(life);
  const [lifeRemoved, setLifeRemoved] = useState(0);
  const [lifeAdded, setLifeAdded] = useState(0);
  const { "$active-bg": activeBg, ...rest } = props;

  function decreaseLife() {
    setCurrentLife((prev) => prev - 1);
    setLifeRemoved((prev) => prev + 1);
    setLifeAdded(0);
  }

  function increaseLife() {
    setCurrentLife((prev) => prev + 1);
    setLifeAdded((prev) => prev + 1);
    setLifeRemoved(0);
  }

  const isVertical = orientation === "vertical";

  useEffect(() => {
    if (lifeRemoved > 0) {
      const timeout = setTimeout(() => {
        setLifeRemoved(0);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [lifeRemoved]);

  useEffect(() => {
    if (lifeAdded > 0) {
      const timeout = setTimeout(() => {
        setLifeAdded(0);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [lifeAdded]);

  if (isVertical) {
    const rotate = props.goTo === "left" ? "-90deg" : "90deg";

    return (
      <HStack
        h={props.h ?? "$full"}
        justifyContent="center"
        alignItems="center"
      >
        <Button
          borderTopRightRadius={0}
          borderBottomRightRadius={0}
          h="$full"
          onPress={props.goTo === "left" ? increaseLife : decreaseLife}
          bg={props.bg}
          sx={props.sx}
          $active-bg={activeBg}
        />
        <Button
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
          h="$full"
          onPress={props.goTo === "left" ? decreaseLife : increaseLife}
          bg={props.bg}
          sx={props.sx}
          $active-bg={activeBg}
        />
        <ButtonText
          position="absolute"
          color="$white"
          fontSize={"$7xl"}
          lineHeight={"$7xl"}
          transform={[{ rotate }]}
        >
          {currentLife}
        </ButtonText>
        <ButtonText
          position="absolute"
          left={props.goTo === "right" ? "$4" : null}
          right={props.goTo === "left" ? "$4" : null}
          fontSize="$xl"
          transform={[{ rotate }]}
        >
          {lifeRemoved > 0 && `-${lifeRemoved}`}
        </ButtonText>
        <ButtonText
          position="absolute"
          fontSize="$xl"
          right={props.goTo === "right" ? "$4" : null}
          left={props.goTo === "left" ? "$4" : null}
          transform={[{ rotate }]}
        >
          {lifeAdded > 0 && `+${lifeAdded}`}
        </ButtonText>
      </HStack>
    );
  }

  const rotate = props.goTo === "top" ? "0deg" : "180deg";

  return (
    <VStack
      alignItems="center"
      justifyContent="center"
      w="$full"
      {...rest}
      rounded={"$xl"}
    >
      <Button
        h={props.h ?? "$32"}
        flex={1}
        w={props.w ?? "$32"}
        borderBottomLeftRadius={0}
        borderBottomRightRadius={0}
        borderTopLeftRadius={"$xl"}
        borderTopRightRadius={"$xl"}
        bg={props.bg}
        $active-bg={activeBg}
        onPress={props.goTo === "top" ? increaseLife : decreaseLife}
      />
      <Button
        flex={1}
        h={props.h ?? "$32"}
        w={props.w ?? "$32"}
        borderTopRightRadius={0}
        borderTopLeftRadius={0}
        borderBottomLeftRadius={"$xl"}
        borderBottomRightRadius={"$xl"}
        onPress={props.goTo === "top" ? decreaseLife : increaseLife}
        bg={props.bg}
        $active-bg={activeBg}
      />
      <ButtonText
        position="absolute"
        color="$white"
        transform={[{ rotate }]}
        fontSize={"$7xl"}
        lineHeight={"$7xl"}
      >
        {currentLife}
      </ButtonText>
      <ButtonText
        position="absolute"
        right={"$8"}
        fontSize="$xl"
        bottom={props.goTo === "top" ? "$4" : "$24"}
        transform={[{ rotate }]}
      >
        {lifeRemoved > 0 && `-${lifeRemoved}`}
      </ButtonText>
      <ButtonText
        position="absolute"
        right={"$8"}
        fontSize="$xl"
        top={props.goTo === "top" ? "$4" : "$24"}
        transform={[{ rotate }]}
      >
        {lifeAdded > 0 && `+${lifeAdded}`}
      </ButtonText>
    </VStack>
  );
}
