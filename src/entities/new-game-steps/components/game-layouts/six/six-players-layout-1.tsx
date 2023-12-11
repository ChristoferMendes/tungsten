import { HStack, VStack } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { UserBox } from "../user-box";
import { UserIcon } from "../user-icon";
import { GameLayoutContainer } from "../game-layout-container";

export function SixPlayersLayout1() {
  return (
    <GameLayoutContainer game={6} layout={1}>
      <VStack w={105} gap="$1">
        <UserBox orientation="horizontal" w={"$full"}>
          <UserIcon rotate="bottom" />
        </UserBox>
        <VStack gap="$1">
          <HStack justifyContent="space-between">
            <UserBox orientation="vertical" h="$16">
              <UserIcon rotate="right" />
            </UserBox>
            <UserBox orientation="vertical" h="$16">
              <UserIcon rotate="left" />
            </UserBox>
          </HStack>
          <HStack justifyContent="space-between">
            <UserBox orientation="vertical" h="$16">
              <UserIcon rotate="right" />
            </UserBox>
            <UserBox orientation="vertical" h="$16">
              <UserIcon rotate="left" />
            </UserBox>
          </HStack>
        </VStack>
        <UserBox orientation="horizontal" w={"$full"}>
          <UserIcon rotate="top" />
        </UserBox>
      </VStack>
    </GameLayoutContainer>
  );
}
