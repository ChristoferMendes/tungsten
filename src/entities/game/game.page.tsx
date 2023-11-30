import {
  Box,
  Button,
  ButtonText,
  Text,
  VStack,
  HStack,
} from "@gluestack-ui/themed";
import { View } from "@gluestack-ui/themed";
import { useLocalSearchParams } from "expo-router";
import Colors from "~/constants/Colors";
import { useLife } from "../new-game-steps/store/use-life";
import { Life } from "./components/life";

function Five() {
  const { life } = useLife();

  return (
    <>
      <HStack bg="$backgroundDark900" flex={1} p={"$6"} w={"$full"} gap={"$2"}>
        <VStack w={"45%"} gap="$2">
          <Life life={life} />
          <Life life={life} bg="$purple900" />
        </VStack>
        <VStack flex={1} gap="$2">
          <Life life={life} bg="$blue600" />
          <Life life={life} bg="$orange600" />
          {/* <Life life={life} bg="$red600" /> */}
        </VStack>
      </HStack>
    </>
  );
}

export function GamePage() {
  const { count } = useLocalSearchParams();

  return (
    <View bgColor={Colors.zinc["900"]}>
      <VStack h="$full" alignItems="center">
        <Five />
      </VStack>
    </View>
  );
}
