import { HStack, Text, VStack, View } from "@gluestack-ui/themed";
import { UserBox } from "../user-box";
import { User } from "lucide-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

export function FourPlayersLayout2() {
  return (
    <TouchableOpacity onPress={() => router.push("/game/4?layout=2")}>
      <View gap="$4" w="$32">
        <HStack gap="$2">
          <UserBox orientation="vertical">
            <User color={"white"} transform={[{ rotate: "90deg" }] as any} />
          </UserBox>
          <UserBox orientation="vertical">
            <User color={"white"} transform={[{ rotate: "270deg" }] as any} />
          </UserBox>
        </HStack>
        <HStack gap={"$2"}>
          <UserBox orientation="vertical">
            <User color={"white"} transform={[{ rotate: "90deg" }] as any} />
          </UserBox>
          <UserBox orientation="vertical">
            <User color={"white"} transform={[{ rotate: "270deg" }] as any} />
          </UserBox>
        </HStack>
      </View>
    </TouchableOpacity>
  );
}
