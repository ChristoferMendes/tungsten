import { Link, router, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../constants/Colors";
import { Button, Text, ButtonText } from "@gluestack-ui/themed";
import { useDisclose } from "@gluestack-ui/hooks";
import { useEffect } from "react";

export default function HomePage() {

  function onNewGame() {
    router.push("/new-game-steps/1");
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.coldGray,
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        borderColor={"$borderDark600"}
        paddingVertical={6}
        borderRadius={8}
        paddingHorizontal={80}
        variant={"outline"}
        $active={{
          backgroundColor: "$backgroundDark950",
        }}
        onPress={onNewGame}
      >
        <ButtonText color={"white"}>NEW GAME</ButtonText>
      </Button>
    </SafeAreaView>
  );
}
