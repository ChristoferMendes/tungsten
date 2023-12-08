import { View, Text, VStack } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { UserBox } from "../user-box";
import { UserIcon } from "../user-icon";

export function TwoPlayersLayout2() {
  return (
    <TouchableOpacity>
      <VStack gap="$1">
        <UserBox orientation="vertical" w={"$24"}>
          <UserIcon rotate="right" />
        </UserBox>
        <UserBox orientation="vertical" w={"$24"}>
          <UserIcon rotate="right" />
        </UserBox>
      </VStack>
    </TouchableOpacity>
  );
}
