import { View, Text, HStack, VStack, Box } from "@gluestack-ui/themed";
import { router } from "expo-router";
import { User } from "lucide-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { UserBox } from "~/entities/new-game-steps/components/game-layouts/user-box";

export function FourPlayersLayout1() {
  return (
    <TouchableOpacity onPress={() => router.push("/game/4?layout=1")}>
      <VStack w="$32">
        <UserBox orientation="horizontal">
          <User color={"white"} />
        </UserBox>
        <HStack mt="$2" justifyContent="space-between">
          <UserBox orientation="vertical">
            <User color={"white"} transform={[{ rotate: "90deg" }] as any} />
          </UserBox>
          <UserBox orientation="vertical">
            <User color={"white"} transform={[{ rotate: "270deg" }] as any} />
          </UserBox>
        </HStack>
        <UserBox mt="$2" orientation="horizontal">
          <User color={"white"} transform={[{ rotate: "180deg" }] as any} />
        </UserBox>
      </VStack>
    </TouchableOpacity>
  );
}
