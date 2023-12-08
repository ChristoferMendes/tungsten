import { View, Text, VStack, HStack } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { UserBox } from "../user-box";
import { UserIcon } from "../user-icon";

export function FivePlayersLayout2() {
  return (
    <TouchableOpacity>
      <HStack gap="$2">
        <VStack gap="$2">
          <UserBox orientation="vertical" h={108}>
            <UserIcon rotate="right" />
          </UserBox>
          <UserBox orientation="vertical" h={108}>
            <UserIcon rotate="right" />
          </UserBox>
        </VStack>
        <VStack gap="$1">
          <UserBox orientation="vertical" h={72}>
            <UserIcon rotate="left" />
          </UserBox>
          <UserBox orientation="vertical" h={72}>
            <UserIcon rotate="left" />
          </UserBox>
          <UserBox orientation="vertical" h={72}>
            <UserIcon rotate="left" />
          </UserBox>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
}
