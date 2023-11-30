import { HStack, Image, Pressable } from "@gluestack-ui/themed";
import { Text, View } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { usePlayersCount } from "~/entities/new-game-steps/store/use-players-count";

const colors = {
  red: require("~/assets/mtg/red.png"),
  green: require("~/assets/mtg/green.png"),
  blue: require("~/assets/mtg/blue.png"),
  black: require("~/assets/mtg/black.png"),
  white: require("~/assets/mtg/white.png"),
};

export function SecondStep() {
  const { setCount } = usePlayersCount()

  function onPress(playersCount: number) {
    setCount(playersCount);
    router.push(`/new-game-steps/3`);
  }

  return (
    <View
      h="$full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={"$12"}
    >
      <Text
        color="$white"
        textAlign="center"
        fontSize={"$2xl"}
        lineHeight={"$2xl"}
        fontWeight="bold"
      >
        HOW MANY PLAYERS?
      </Text>
      <HStack gap={"$12"}>
        <Pressable onPress={() => onPress(2)}>
          <HStack
            h="$32"
            flexWrap="wrap"
            w="$24"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
          >
            <Image source={colors.green} alt="green" size="xs" />
            <Image source={colors.red} alt="blue" size="xs" />
          </HStack>
        </Pressable>
        <Pressable onPress={() => onPress(3)}>
          <HStack
            h="$32"
            flexWrap="wrap"
            w="$24"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image source={colors.red} alt="black" size="xs" />
            <Image source={colors.black} alt="white" size="xs" />
            <Image source={colors.blue} alt="red" size="xs" />
          </HStack>
        </Pressable>
      </HStack>
      <HStack gap={"$12"}>
        <Pressable onPress={() => onPress(4)}>
          <HStack
            h="$32"
            flexWrap="wrap"
            w="$24"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image source={colors.blue} alt="green" size="xs" />
            <Image source={colors.white} alt="blue" size="xs" />
            <Image source={colors.green} alt="black" size="xs" />
            <Image source={colors.red} alt="white" size="xs" />
          </HStack>
        </Pressable>
        <Pressable onPress={() => onPress(5)}>
          <HStack
            h="$32"
            flexWrap="wrap"
            w="$24"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image source={colors.black} alt="red" size="xs" />
            <Image source={colors.blue} alt="green" size="xs" />
            <Image source={colors.white} alt="blue" size="xs" />
            <Image source={colors.green} alt="black" size="xs" />
            <Image source={colors.red} alt="white" size="xs" />
          </HStack>
        </Pressable>
      </HStack>
      <HStack>
        <Pressable onPress={() => onPress(6)}>
          <HStack
            h="$32"
            flexWrap="wrap"
            mt="$4"
            w="$32"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image source={colors.white} alt="green" size="xs" />
            <Image source={colors.green} alt="blue" size="xs" />
            <Image source={colors.red} alt="black" size="xs" />
            <Image source={colors.black} alt="white" size="xs" />
            <Image source={colors.blue} alt="red" size="xs" />
            <Image source={colors.green} alt="green" size="xs" />
          </HStack>
        </Pressable>
      </HStack>
    </View>
  );
}
