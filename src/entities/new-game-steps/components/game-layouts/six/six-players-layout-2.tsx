import { HStack, VStack } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { UserBox } from "../user-box";
import { UserIcon } from "../user-icon";
import { GameLayoutContainer } from "../game-layout-container";

export function SixPlayersLayout2() {
  return (
    <GameLayoutContainer game={6} layout={2}>
      <HStack gap="$1">
        <VStack gap="$1">
          <UserBox orientation="vertical" h={76.5}>
            <UserIcon rotate="right" />
          </UserBox>
          <UserBox orientation="vertical" h={76.5}>
            <UserIcon rotate="right" />
          </UserBox>
          <UserBox orientation="vertical" h={76.5}>
            <UserIcon rotate="right" />
          </UserBox>
        </VStack>
        <VStack gap="$1">
          <UserBox orientation="vertical" h={76.5}>
            <UserIcon rotate="left" />
          </UserBox>
          <UserBox orientation="vertical" h={76.5}>
            <UserIcon rotate="left" />
          </UserBox>
          <UserBox orientation="vertical" h={76.5}>
            <UserIcon rotate="left" />
          </UserBox>
        </VStack>
      </HStack>
    </GameLayoutContainer>
  );
}
