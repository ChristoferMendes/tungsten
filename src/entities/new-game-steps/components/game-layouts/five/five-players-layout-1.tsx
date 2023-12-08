import { HStack, Text, VStack, View } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { UserBox } from "../user-box";
import { User } from "lucide-react-native";
import { UserIcon } from "../user-icon";

export function FivePlayersLayout1() {
  return (
    <TouchableOpacity>
      <VStack gap="$2">
        <HStack gap="$2">
          <UserBox orientation="vertical" h="$20">
            <UserIcon rotate="right" />
          </UserBox>
          <UserBox orientation="vertical" h="$20">
            <UserIcon rotate="left" />
          </UserBox>
        </HStack>
        <HStack gap="$2">
          <UserBox orientation="vertical" h="$20">
            <UserIcon rotate="right" />
          </UserBox>
          <UserBox orientation="vertical" h="$20">
            <UserIcon rotate="left" />
          </UserBox>
        </HStack>
        <UserBox orientation="horizontal" w={106} h="$12">
          <UserIcon rotate="top" />
        </UserBox>
      </VStack>
    </TouchableOpacity>
  );
}
