import { Button, ButtonText, Text } from "@gluestack-ui/themed";
import { useState } from "react";
import { GestureResponderEvent, LayoutChangeEvent } from "react-native";

type TextProps = React.ComponentProps<typeof Text>;

export function Life({ life, ...props }: TextProps & { life: number }) {
  const [currentLife, setCurrentLife] = useState(life);
  const [buttonHeight, setButtonHeight] = useState(0);

  function onLayout(e: LayoutChangeEvent) {
    setButtonHeight(e.nativeEvent.layout.height);
  }

  function handleSetLife(e: GestureResponderEvent) {
    const locationY = e.nativeEvent.locationY;

    if (locationY < buttonHeight / 2) {
      setCurrentLife(currentLife + 1);
    } else {
      setCurrentLife(currentLife - 1);
    }
  }

  return (
    <>
      <Button
        onPress={handleSetLife}
        onLayout={onLayout}
        rounded={"$xl"}
        h={"$32"}
        bg={props.bg || "$purple500"}
        flex={1}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <ButtonText
          color="$white"
          fontSize="$7xl"
          fontFamily="$mono"
          lineHeight={125}
        >
          {currentLife}
        </ButtonText>
      </Button>
    </>
  );
}
